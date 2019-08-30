const path = require('path');

const rootPath = path.resolve(__dirname, '../../');
const sourcePath = path.resolve(rootPath, 'src');

module.exports = {
	mode: 'production',
	entry: { 'react-components': ['./src/index.js'] },
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
			'@tradeshift/react-components': `${sourcePath}/index.js`
		}
	}
};
