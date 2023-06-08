const baseConfig = require('./webpack.base.config.js');

const { merge } = require('webpack-merge');
const path = require('path');

const nodeExternals = require('webpack-node-externals');

const config = {
  entry: [
    './src/server.js',
  ],
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'main.js',
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, config);
