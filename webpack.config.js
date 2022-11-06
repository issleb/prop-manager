const path = require("path");
const package = require("./package.json");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./background.js",
    airbnb: "./airbnb.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "./manifest.json",
          transform: function (content) {
              var manifestBase = JSON.parse(content.toString());
              var manifest = { 
                  ...manifestBase, 
                  version: package.version
              };
              return Buffer.from(JSON.stringify(manifest, null, 2));
          }     
      },             
      ]
    })
  ]
};