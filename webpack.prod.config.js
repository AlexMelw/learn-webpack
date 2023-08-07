const { merge } = require('webpack-merge'); 

const baseConfig = require('./webpack.base.config.js');

const config = {
  devtool: false,
  mode: 'production',
}

module.exports = merge(baseConfig, config);
