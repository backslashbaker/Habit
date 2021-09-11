output "website" {
  value = aws_s3_bucket.static-hosting.website_endpoint
}