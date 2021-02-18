const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        title: "Development",
      }),
    ],

    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },

    devtool: isProduction
      ? "inline-source-map"
      : "cheap-module-eval-source-map",
    devServer: {
      contentBase: "./public",
    },
    // devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    // devServer: {
    //   contentBase: path.join(__dirname, "public"),
    //   historyApiFallback: true,
    // },
  };
};

// const path = require('path');

// module.exports = (env) => {
//   const isProduction = env === 'production';

// module.exports = {
//    mode: 'development',
//    entry: './src/app.js',
//     output: {
//       path: path.join(__dirname, 'public'),
//       filename: 'bundle.js'
//     },

// module: {
//       rules: [{
//         loader: 'babel-loader',
//         test: /\.js$/,
//         exclude: /node_modules/
//       }, {
//         test: /\.s?css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }],
//  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
//     devServer: {
//       contentBase: path.join(__dirname, 'public'),
//       historyApiFallback: true
//     },

//    plugins: [
//      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
//      new HtmlWebpackPlugin({
//        title: 'Development',
//      }),
//    ],
//    output: {
//      filename: '[name].bundle.js',
//      path: path.resolve(__dirname, 'public'),
//    },
//  }

// }

// // const path = require("path");

// // module.exports = {
// //   mode: "development",
// //   entry: "./src/app.js",
// //   output: {
// //     path: path.join(__dirname, "public"),
// //     filename: "bundle.js",
// //   },
// //   module: {
// //     rules: [
// //       {
// //         loader: "babel-loader",
// //         test: /\.js$/,
// //         exclude: /node_modules/,
// //       },
// //       {
// //         test: /\.s?css$/,
// //         use: ["style-loader", "css-loader", "sass-loader"],
// //       },
// //     ],
// //   },
// // };
