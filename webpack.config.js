// don't use it
// it's just an another way to create webpack config
// but in a single file

const path = require('path');
const { merge } = require('webpack-merge');

const baseConfig = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ],
    },
};

const frontendConfig = merge(baseConfig, {
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'dist/frontend'),
            filename: 'main.js',
            libraryTarget: 'umd',
        },
        name: 'frontend-config',
    })

const serverConfig = merge(baseConfig, {
    entry: './src/server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist/server'),
        filename: 'main.js',
        libraryTarget: 'commonjs'
    },
    name: 'server-config',
});

module.exports = [
    frontendConfig,
    serverConfig
];
