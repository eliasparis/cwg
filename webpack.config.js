var path = require('path');
var webpack = require('webpack');

module.exports = function(env){

  const isDev = env === "development";

  return {
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
    plugins: 
      isDev ? [
      	new webpack.HotModuleReplacementPlugin()
      ] : [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': env
        })
      ],
    devServer: {
      hot: true, 
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/tmp/'
    },
    devtool: isDev ? 'inline-source-map' : 'cheap-module-source-map'
  }
};