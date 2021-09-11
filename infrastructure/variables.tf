variable "application" {
  type    = string
  default = "habit"
}

variable "environment" {
  type    = string
  default = "production"
}

locals {
  application-slug = "${var.application}-${var.environment}"
}