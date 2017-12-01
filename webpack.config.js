const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');

module.exports = env => {
  return {
    devtool: env.NODE_ENV === 'production' ? 'cheap-module-source-map' : 'source-map',
    entry: ['index.tsx'],
    output: {
      filename: 'bundle.js',
      publicPath: 'dist',
      path: path.resolve('./dist')
    },
    devServer: {
      port: 3001,
      proxy: {
        '/api': 'http://localhost:2999',
        '/redirect': 'http://localhost:9090'
      },
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
      extensions: ['.ts', '.tsx', '.js', '.jsx', 'less', 'sass', 'scss', 'css'],
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
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!less-loader'
          }),
          include: path.resolve('src')
        },
        {
          test: /\.(s?[ac]ss)$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
          }),
          include: path.resolve('src')
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'url-loader'
            }
          ]
        }
      ]
    },
    plugins:
      env.NODE_ENV === 'production'
        ? [
            new WebpackNotifierPlugin(),
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify(env.NODE_ENV)
              }
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
              },
              output: {
                comments: false
              },
              sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: { removeAll: true } },
              canPrint: true
            }),
            new StyleExtHtmlWebpackPlugin({
              minify: true
            }),
            new CompressionPlugin({
              asset: '[path].gz[query]',
              algorithm: 'gzip',
              test: /\.js$|\.ts$|\.tsx$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
              threshold: 10240,
              minRatio: 0.8
            })
          ]
        : [
            new WebpackNotifierPlugin(),
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify(env.NODE_ENV)
              }
            }),
            new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { discardComments: { removeAll: true } },
              canPrint: true
            })
          ]
  };
};
