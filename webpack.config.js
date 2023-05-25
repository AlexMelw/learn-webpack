const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', // Output filename
  },
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
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    })
  ],
};

module.exports = config;
