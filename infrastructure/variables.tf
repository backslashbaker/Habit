variable "application" {
  type    = string
  default = "habit"
}

variable "environment" {
  type    = string
  default = "production"
}

variable "aws-region" {
  type    = string
  default = "eu-west-2"
}

locals {
  application-slug = "${var.application}-${var.environment}"
}