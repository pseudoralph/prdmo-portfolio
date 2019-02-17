const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer')
  .WebpackBundleSizeAnalyzerPlugin;

console.log('READING');

module.exports = {
  mode: 'production',
  entry: [
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    resolve(__dirname, 'src') + '/index.jsx'
  ],
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.jsx*/gi,
        exclude: /\/node_modules/,
        uglifyOptions: {
          ecma: 6,
          mangle: true,
          unused: true,
          dead_code: true,
          warnings: false,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true,
          sequences: true,
          booleans: true,
          compress: {
            warnings: false,
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true
          },
          output: {
            comments: false
          }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(resolve(__dirname, 'build')),
    new HtmlWebpackPlugin({
      template: 'template.ejs',
      appMountId: 'react-app-root',
      title: 'prdmo',
      filename: resolve(__dirname, 'build', 'index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new WebpackBundleSizeAnalyzerPlugin(
      resolve(__dirname, 'build', 'plain-report.txt')
    ),
    new MinifyPlugin(
      {},
      {
        exclude: ['node_modules'],
        sourceMap: null
      }
    )
  ],
  // devtool: 'source-map',
  // devServer: {
  // hot: true,
  // contentBase: resolve(__dirname, 'build')
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: './.eslintrc.json'
        }
      },
      {
        test: /\.(png|gif|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[hash]-[name].[ext]'
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
};
