provider "aws" {
  region = var.aws-region
}

terraform {
  required_version = "~> 1.0.6"
  backend "s3" {
    bucket = "habit-tf-state"
    key = "production"
    region = "eu-west-2"
  }
}
