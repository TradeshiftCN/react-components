const _ = require('lodash/fp');
const { lintStaged } = require('tradeshift-scripts/config');

const README = _.pick('README.md', lintStaged.linters);

module.exports = {
  ...lintStaged,
  linters: {
    ...README,
    '**/*.+(js|json|less|css|ts)': [
      'tradeshift-scripts format',
      'tradeshift-scripts lint',
      'git add'
    ]
  }
};
