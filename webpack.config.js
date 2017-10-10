const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['index.tsx'],
  output: {
    filename: 'bundle.js',
    publicPath: 'dist',
    path: path.resolve('./dist')
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    inline: true,
    stats: {
      modules: false,
      chunks: false,
      children: false,
      chunkModules: false,
      hash: false
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'less', 'css'],
    modules: ['src', 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        include: path.resolve('src')
      },
      {
        test: /.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!less-loader'
        }),
        include: path.resolve('src')
      }
    ]
  },
  plugins: [new WebpackNotifierPlugin(), new ExtractTextPlugin('styles.css')]
};
