provider "aws" {
  region = var.region
}

module "network" {
  source = "./network"
}

module "instance" {
  source           = "./instance"
  subnet_id        = module.network.public_subnet_id
  security_group_id = module.network.security_group_id
}

module "dns" {
  source        = "./dns"
  elastic_ip    = module.instance.elastic_ip
  domain_name   = var.domain_name
  hosted_zone_id = var.hosted_zone_id
}
