const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname, '../../');
const sourcePath = path.resolve(rootPath, 'src');
const version = require('../../package.json').version;

module.exports = {
	mode: 'production',
	entry: { 'react-components': ['./src/components/index.ts'] },
	output: {
		path: path.join(rootPath, 'dist'),
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				include: sourcePath
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'ts-loader'],
				include: sourcePath
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
			'@tradeshift/react-components': `${sourcePath}/components/index.ts`
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(version)
		})
	]
};
