const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const sourcePath = path.resolve(__dirname, '../src');
const isDev = process.env.NODE_ENV === 'development';
const version = require('../package.json').version;
let lessLoaders = ['css-loader', 'postcss-loader', 'less-loader'];
const plugins = [
	new webpack.DefinePlugin({
		VERSION: JSON.stringify(version)
	}),
	new ForkTsCheckerWebpackPlugin()
];

if (isDev) {
	lessLoaders = lessLoaders.map(loader => `${loader}?sourceMap`);
	lessLoaders.unshift('style-loader');
} else {
	lessLoaders.unshift(MiniCssExtractPlugin.loader);
	plugins.push(
		new MiniCssExtractPlugin({
			filename: 'build/bundle.[contenthash:8].css'
		})
	);
}

const config = {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: lessLoaders
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@tradeshift/react-components': `${sourcePath}/components/index.js`
		}
	},
	plugins,
	devServer: {
		progress: true,
		open: true
	}
};

module.exports = config;
