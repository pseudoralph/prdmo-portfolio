const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', resolve(__dirname, 'src') + '/index.jsx'],
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.ejs',
      appMountId: 'react-app-root',
      title: 'prdmo',
      filename: resolve(__dirname, 'build', 'index.html')
    })
  ],
  devtool: '#source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build')
  },
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
              'styled-jsx/babel',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  }
};
