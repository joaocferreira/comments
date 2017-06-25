const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('api/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}