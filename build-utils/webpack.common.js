const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: ['url-loader?limit=100000'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '..', './src'),
      '@slices': path.resolve(__dirname, '..', './src/api/slices'),
      '@assets': path.resolve(__dirname, '..', './src/images'),
      '@components': path.resolve(
        __dirname,
        '..',
        './src/components',
      ),
      '@layout': path.resolve(__dirname, '..', './src/layout'),
      '@pages': path.resolve(__dirname, '..', './src/pages'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Lord of rings',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new ESLintPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    static: './',
    hot: true,
  },
};
