const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config.js');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist/frontend'),
        filename: 'main.js'
    }
};

module.exports = merge(baseConfig, config);
