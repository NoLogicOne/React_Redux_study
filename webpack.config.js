var webpack = require('webpack');

var config = {
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/dist/assets",
		filename: "bundle.js",
		sourceMapFilename: 'bundle.map'
	},
	devtool: '#sorce-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'env', 
						'stage-0', 
						'react'
					]
				}
			},
			{
				test: /\.s?css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	optimization: {
		minimize: false
	}
	// plugins: [
	// 	new config.optimization.minimize({
	// 		sourceMap: true,
	// 		warnings: false,
	// 		mangle: true
	// 	})
	// ]
}

module.exports = config;