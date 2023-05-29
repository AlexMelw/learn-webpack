const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    // publicPath: '/assets/',
  }
}

module.exports = merge(baseConfig, config);
