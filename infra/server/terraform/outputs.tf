output "instance_public_ip" {
  value = module.instance.elastic_ip
}

output "instance_public_dns" {
  value = module.instance.public_dns
}

output "api_url" {
  value = "http://${module.instance.elastic_ip}"
}
