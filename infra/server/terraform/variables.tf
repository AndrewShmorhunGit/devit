variable "region" {
  default = "eu-central-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "domain_name" {
  default = "api.shmorhun.com"
}

variable "hosted_zone_id" {
  description = "ID Hosted Zone в Route 53"
  type        = string
}

variable "cidr_block" {
  description = "CIDR-блок для VPC"
  default     = "10.0.0.0/16"
}
