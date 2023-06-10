const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  mode: 'development',
  devServer: {
    static: {
      directory: './public',
    },
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // use: ['babel-loader']
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [ 'react-refresh/babel' ],
            }
          }
        ]
      }
    ],
  },
  plugins: [ new ReactRefreshWebpackPlugin() ],
};

module.exports = merge(baseConfig, config);
