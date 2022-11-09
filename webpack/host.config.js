const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    airbnb: "./host/airbnb.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist_host")
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        // Process all .js files with babel.
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }, 
          {
            loader: "sass-loader"
          }
        ]
      }        
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "**/*.html", context: "host/" }
      ]
    }),
  ]  
};