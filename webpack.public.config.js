const baseConfig = require('./webpack.base.config.js');

const path = require('path');
const { merge } = require('webpack-merge');

const config = {
  entry: './src/index-public.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'main.js'
  }
};

module.exports = merge(baseConfig, config);
