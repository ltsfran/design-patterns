const path = require('path');
const rootPath = path.join(__dirname, '');
const WebpackUtil = require('./webpack.util.js');
const isWin = process.platform === 'win32';
const slash = isWin ? '\\\\' : '\\\/';
const regexView = new RegExp(slash + 'view\.ts$');

module.exports = {
  devtool: 'source-map',
  entry: WebpackUtil.filesToCompile('./Patterns', regexView),
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