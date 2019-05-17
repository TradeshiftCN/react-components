/*
 * Changing the config here also applies to the npm script checks.
 * Docs: https://jestjs.io/docs/en/configuration#options
 **/
module.exports = {
	...require('tradeshift-scripts/config').jest
	// override coverage limits:
	// coverageThreshold: {
	// 	global: {
	// 		branches: 80,
	// 		functions: 80,
	// 		lines: 80,
	// 		statements: -10
	// 	}
	// }
};
