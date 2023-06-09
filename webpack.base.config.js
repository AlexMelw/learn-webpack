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
      favicon: './public/favicon.png',
      // templateContent: ({ htmlWebpackPlugin }) => `
      //   <!DOCTYPE html>
      //   <html>
      //     <head>
      //       <meta charset="UTF-8">  
      //       <title>${htmlWebpackPlugin.options.title}</title>
      //     </head>
      //     <body>
      //       <div id="root"></div>
      //     </body>
      //   </html>`,
      template: './public/index.html',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'], 
    // extensions: [], // This is to enforce the use of explicit file extensions
  }
};

module.exports = config;
