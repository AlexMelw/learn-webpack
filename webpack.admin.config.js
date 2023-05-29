const baseConfig = require('./webpack.base.config.js');

const path = require('path');
const { merge } = require('webpack-merge');

const config = {
  entry: './src/index-admin.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/admin'),
    filename: 'main.js'
  }
};

module.exports = merge(baseConfig, config);
