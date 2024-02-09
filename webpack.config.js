const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,

    module.exports = {

        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
          ],
        },
      
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'about.html'
        }),
        new MiniCssExtractPlugin(),
        
    ],
};