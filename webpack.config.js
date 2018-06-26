const path = require('path')

module.exports = {
  context: __dirname,
  entry: "./js/ClientApp.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  devServer: {
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
