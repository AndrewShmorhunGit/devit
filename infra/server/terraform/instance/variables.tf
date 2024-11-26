variable "region" {
  default = "eu-central-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "domain_name" {
  default = "api.shmorhun.com"
}

variable "cidr_block" {
  description = "CIDR-блок для VPC"
  default     = "10.0.0.0/16"
}

variable "subnet_id" {
  description = "Subnet ID for the instance"
  type        = string
}

variable "security_group_id" {
  description = "Security group ID for the instance"
  type        = string
}