const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default

        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: { 
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@container': path.resolve(__dirname, 'src/js/components/container'),
      '@presentational': path.resolve(__dirname, 'src/js/components/presentational'),
      '@tils': path.resolve(__dirname, 'src/js/utils'),
      '@reducer': path.resolve(__dirname, 'src/js/redux/index.js'),
      '@actionTypes': path.resolve(__dirname, 'src/js/redux/action-types.js'),
      '@store': path.resolve(__dirname, 'src/js/store/index.js'),
      '@scss': path.resolve(__dirname, 'src/scss/index.scss'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ]
};