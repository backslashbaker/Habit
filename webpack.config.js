const { resolve } = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: { rules: [{ test: /\.ts$/, use: "ts-loader" }] },
  resolve: { extensions: [".ts"]},
  output: { path: resolve(__dirname, "build"), filename: "index.js" },
};
