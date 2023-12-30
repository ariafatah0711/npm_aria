// import { merge } from "webpack-merge";
// import common from "./webpack.common";
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
});
