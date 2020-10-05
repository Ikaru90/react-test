const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: './src/index.jsx',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/react',
              '@babel/env',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
