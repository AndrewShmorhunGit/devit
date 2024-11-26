variable "domain_name" {
  default = "api.shmorhun.com"
}

variable "hosted_zone_id" {
  description = "ID Hosted Zone в Route 53"
  type        = string
}

variable "elastic_ip" {
  description = "Elastic IP address of the instance"
  type        = string
}
