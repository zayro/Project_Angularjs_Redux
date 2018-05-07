const webpack = require('webpack');
const path = require('path');

module.exports = {
	cache: false,
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ],
    loaders: [
      {
			    test: /\.js?$/,
			    loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: 'style!sass',
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: __dirname + '/public'
      }
       	],
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
  ],
};
