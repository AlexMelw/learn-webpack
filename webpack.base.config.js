const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const config = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true, // Clean the output directory before emit.
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
          // 'style-loader',
          { loader: MiniCssExtractPlugin.loader,  /* use either this or style-loader */ },
          { loader: 'css-loader', },
          { loader: 'sass-loader', }
        ]
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/fonts', to: 'assets/fonts' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    // extensions: [], // This is to enforce the use of explicit file extensions
    extensions: ['.js', '.jsx'],
    alias: {
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    }
  }
};

module.exports = config;
