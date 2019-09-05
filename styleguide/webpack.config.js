const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sourcePath = path.resolve(__dirname, '../src');
const isDev = process.env.NODE_ENV === 'development';
let lessLoaders = ['css-loader', 'postcss-loader', 'less-loader'];
const plugins = [];

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
				test: /\.(t|j)sx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
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
			'@tradeshift/react-components': `${sourcePath}/index.js`
		}
	},
	plugins,
	devServer: {
		progress: true,
		open: true
	}
};

module.exports = config;
