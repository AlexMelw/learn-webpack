const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const DEVELOPMENT_MODE = "development";
const { env: { NODE_ENV = DEVELOPMENT_MODE } } = process;

console.log('NODE_ENV:', NODE_ENV, '\n');

const plugins = [
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
  new LodashModuleReplacementPlugin(),
];

if (process.env.ANALYZE_BUNDLE) {
  console.log("Analyzing bundle included...")
  plugins.push(new BundleAnalyzerPlugin());
}

const config = {
  devtool: 'eval-source-map',
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true, // Clean the output directory before emit.
    assetModuleFilename: 'assets/[name][contenthash][ext]', // This will output assets to the "dist/assets" folder.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: NODE_ENV === DEVELOPMENT_MODE ? 'style-loader' : MiniCssExtractPlugin.loader },
      //     { loader: 'css-loader' },
      //   ]
      // },
      // {
      //   test: /\.(sass|scss)$/,
      //   use: [
      //     { loader: NODE_ENV === DEVELOPMENT_MODE ? 'style-loader' : MiniCssExtractPlugin.loader },
      //     { loader: 'css-loader' },
      //     { loader: 'sass-loader' }
      //   ]
      // },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: NODE_ENV === DEVELOPMENT_MODE ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  // Other plugins,
                  [ 'postcss-preset-env', { /* Options */ } ]
                ]
              }
            }
          },
          { loader: 'sass-loader' }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // https://webpack.js.org/guides/asset-modules/
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins,
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
