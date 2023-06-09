const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  mode: 'development',
  devServer: {
    static: './dist',
  }
}

module.exports = merge(baseConfig, config);
