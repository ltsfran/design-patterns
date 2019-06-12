const path = require('path');
const rootPath = path.join(__dirname, '');
const WebpackUtil = require('./webpack.util.js');

module.exports = {
  devtool: 'source-map',
  entry: WebpackUtil.filesToCompile('./Patterns', /\/view\.ts$/),
  output: {
    filename: '[name].js',
    path: path.join(rootPath, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@app': rootPath
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  mode: 'development',
  plugins: []
}