# Available commands

This project comes with [tradeshift-scripts](https://github.com/Tradeshift/tradeshift-scripts),
and a number of npm run-scripts.

## npm run build

Run babel transforms on the source, putting the results in `dist`.

## npm test

Run [jest](https://jestjs.io) test runner in watch mode.

Jest configuration can be overridden by changing `jest.config.js`, to override
any of the [available options](https://jestjs.io/docs/en/configuration#options).
This allows changing ignored files, coverage limits or test runner setup.

## npm run lint

Run [eslint](https://eslint.org/) code style checker on all source files.

Customization of the eslint setup is done in [.eslintrc.js](.eslintrc.js).

## npm run format

Run [prettier](https://prettier.io/) code formatter on all the source files.

Useful when updating prettier or tradeshift-scripts, to align the code with any
changed formatting rules.

## npm run validate

Validate essentially means build and test. It runs the build, lint and test
commands, if they are available.

## npm run typecheck

Runs the typescript compiler on the code, in order to detect type errors.
This command does not run as part of the default build.

## npm run precommit

The precommit script comes together with `lint-staged` to create a precommit workflow of:

- lint staged files w/ eslint
- format staged files w/ prettier
- run tests related to staged files w/ jest

The hooks are by filetype, and can be customized by creating a `lint-staged.config.js`.
This can be useful to disable the tests, if we swap out the test runner for one
that does not run on the commandline for instance.
