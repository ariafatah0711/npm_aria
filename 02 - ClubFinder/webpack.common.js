// import HtmlWebpackPlugin from "html-webpack-plugin";
// import path from "path";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // module
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },

  // plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
