// webpack-common-config.js

// This file will contain configuration data that
// is shared between development and production builds.

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const paths = require("./paths");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    })
  ],
  resolve: {
    // File extensions. Add others and needed (e.g. scss, json)
    extensions: [".js", ".jsx", ".scss"],
    modules: ["node_modules"],
    // Aliases help with shortening relative paths
    // 'Components/button' === '../../../components/button'
    alias: {
      components: path.resolve(paths.appSrc, "components"),
      actions: path.resolve(paths.appSrc, "actions"),
      reducers: path.resolve(paths.appSrc, "reducers"),
      api: path.resolve(paths.appSrc, "api"),
      utils: path.resolve(paths.appSrc, "utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"]
      }
    ]
  }
};
