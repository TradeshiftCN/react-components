/*
 * Export the tradeshift-scripts config so the editor can lint using
 * the same rules as with npm run lint.
 *
 * Changing the config here also applies to the npm script checks.
 **/
module.exports = require('tradeshift-scripts/config').eslint;
