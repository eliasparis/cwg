var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/ts/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/tmp/'),
    publicPath: './dist/tmp/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
  	rules: [
  		{
  			test: '/\.css$/',
  			use: [
  				'style-loader',
  				'css-loader'
  			]
  		},
  		{
       test: /\.ts?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     }
  	]
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true, 
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/tmp/',
    watchContentBase: true
  },
  devtool: 'inline-source-map'
};