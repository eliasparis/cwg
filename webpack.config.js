var path = require('path');
var webpack = require('webpack');
var posProdPlugin = require('./builder_scripts/productionplugin.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env){

  const isDev = env === "development";

  return {
    entry: './src/ts/app.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/tmp/'),
      publicPath: './tmp/'
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
    	rules: [
    		{
    			test: /\.css$/,
    			use: isDev ? [
    				'style-loader',
    				'css-loader'
    			] : ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
    		},
    		{
         test: /\.ts?$/,
         use: 'ts-loader',
         exclude: /node_modules/
       }
    	]
    },
    plugins: 
      isDev ? [
      	new webpack.HotModuleReplacementPlugin()
      ] : [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': env
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('../css/[name].css'),
        new posProdPlugin()
      ],
    devServer: {
      hot: true, 
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/tmp/'
    },
    devtool: isDev ? 'inline-source-map' : 'cheap-module-source-map'
  }
};