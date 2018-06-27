const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reason: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader']
      }
    ]
  }
};
