resource "aws_s3_bucket" "static-hosting" {
  bucket = "${local.application-slug}-static-hosting"
  acl    = "public-read"
  website {
    index_document = "main.html"
  }

}
resource "aws_s3_bucket_object" "object" {
  bucket       = aws_s3_bucket.static-hosting.bucket
  key          = "main.html"
  source       = "${path.cwd}/../main.html"
  acl          = "public-read"
  content_type = "text/html"
  etag         = filemd5("${path.cwd}/../main.html")
}