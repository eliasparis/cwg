var path = require('path');
var webpack = require('webpack');
var PosProdPlugin = require('./builder_scripts/productionplugin.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env){

  const isDev = env === "development";

  return {
    entry: {
      app: './src/ts/app.ts',
      cms: './src/ts/cms.ts'
    },
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, 'dist/public/'),
      publicPath: './dist/'
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
        },
        {
          test: /\.(ejs)$/,
          use: 'ejs-compiled-loader'
        }
    	]
    },
    plugins: 
      isDev ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
          Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
          fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        })
      ] : [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new webpack.ProvidePlugin({
          Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
          fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('../css/[name].css'),
        new PosProdPlugin()
      ],
    devServer: {
      hot: true, 
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/public/',
      proxy:{
        '/scripts' : {
          target: "http://[::1]:8000",
          pathRewrite: {"^/scripts" : ""}
        }
      }
    },
    devtool: isDev ? 'inline-source-map' : 'cheap-module-source-map'
  }
};