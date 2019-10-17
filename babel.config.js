module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false
			}
		],
		'@babel/preset-react',
		'@babel/preset-typescript'
	],
	plugins: [
		'lodash',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-object-rest-spread'
	],
	env: {
		test: {
			presets: [
				[
					'@babel/preset-env',
					{
						useBuiltIns: 'usage',
						corejs: 3
					}
				]
			]
		}
	}
};
