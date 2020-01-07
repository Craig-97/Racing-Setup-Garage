// webpack-dev-config.js

// configuration data related to development only

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const paths = require("./paths");
// import common webpack config
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: [paths.appIndexJs, paths.appIndexScss],
  mode: "development",
  // devtool option controls if and how source maps are generated.
  // see https://webpack.js.org/configuration/devtool/
  // If you find that you need more control of source map generation,
  // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
  devtool: "#eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  module: {
    rules: [
      {
        // look for .js or .jsx files
        test: /\.(js|jsx)$/,
        // in the `src` directory
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules)/,
        use: {
          // use babel for transpiling JavaScript files
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
         'style-loader',
         {
           loader: "css-loader",
           options: {
             modules: true,
             importLoaders: 1
           }
         }
        ]
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('postcss-smart-import'),
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, "../src/styles")]
              }
            }
          ]
      }
    ],
  },
});