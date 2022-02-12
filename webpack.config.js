const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "browserslist:> 1%",
  module: {
    rules: [{ test: /\.ts?x$/, use: "ts-loader" }],
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  devServer: {
    client: {
      overlay: true,
      progress: true,
      reconnect: true,
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      template: resolve(__dirname, "src", "index.html"),
      title: "Habit Tracker",
    }),
  ],
  output: { path: resolve(__dirname, "build"), filename: "index.js" },
};
