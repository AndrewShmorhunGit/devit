resource "aws_key_pair" "fastify_key" {
  key_name   = "fastify-key"
  public_key = file("C:/Users/Andrew/.ssh/id_rsa.pub")
}

resource "aws_instance" "fastify" {
  ami             = "ami-0b5673b5f6e8f7fa7"
  instance_type   = var.instance_type
  subnet_id       = var.subnet_id
  security_groups = [var.security_group_id]

  key_name = aws_key_pair.fastify_key.key_name     # Указываем key-pair

  tags = {
    Name = "fastify-instance"
  }

  connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ec2-user"
    private_key = file("C:/Users/Andrew/.ssh/id_rsa") # Приватный ключ для SSH
  }

  provisioner "file" {
    source      = "../../../apps/server"
    destination = "/home/ec2-user/fastify-app"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo yum update -y",
      "curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -",
      "sudo yum install -y nodejs",
      "cd /home/ec2-user/fastify-app",
      "echo '[Unit]' | sudo tee /etc/systemd/system/fastify.service",
      "echo 'Description=Fastify App' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo 'After=network.target' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo '' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo '[Service]' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo 'ExecStart=/usr/bin/node /home/ec2-user/fastify-app/server.js --port 80' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo 'Restart=always' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo 'User=ec2-user' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo '' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo '[Install]' | sudo tee -a /etc/systemd/system/fastify.service",
      "echo 'WantedBy=multi-user.target' | sudo tee -a /etc/systemd/system/fastify.service",
      "sudo systemctl daemon-reload",
      "sudo systemctl start fastify",
      "sudo systemctl enable fastify"
    ]
  }
}

# Добавляем ресурс Elastic IP
resource "aws_eip" "fastify_ip" {
  instance = aws_instance.fastify.id
}

# Вывод значения Elastic IP
output "elastic_ip" {
  value = aws_eip.fastify_ip.public_ip
}