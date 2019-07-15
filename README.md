<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [react-components](#react-components)
  - [Installation](#installation)
  - [Basic usage](#basic-usage)
  - [Use in create-react-app](#use-in-create-react-app)
  - [Contribute](#contribute)
  - [Development](#development)
  - [Changelog](#changelog)
  - [Contributing](#contributing)
  - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# react-components

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install @tradeshift/react-components
```

## Basic usage

```jsx
import { Button } from '@tradeshift/react-components';

ReactDOM.render(<Button>Name</Button>, mountNode);
```

## Use in create-react-app

[create-react-app][create-react-app-url] is one of the best React application development tools. We are going to use `@tradeshift/react-components` within it.

First of all, you need install `create-react-app`, [see more][create-react-app-url] .

Now we install `@tradeshift/react-components` from yarn or npm.

```bash
yarn add @tradeshift/react-components
```

Modify `src/App.js`, import Button component from `@tradeshift/react-components`.

```jsx
import React, { Component } from 'react';
import './App.css';
import { Button } from '@tradeshift/react-components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button icon="add">Add</Button>
      </div>
    );
  }
}

export default App;
```

Ok, you should now see a button displayed on the page. Next you can choose any components of `@tradeshift/react-components` to develop your application. Visit other workflows of `create-react-app` at its [User Guide][create-react-app-user-guide-url] .


## Contribute

Any code pushed to master will be automatically released to `npm` with an appropriate semantic version.
Releases are handled automatically by Jenkins via [semantic-release](https://github.com/semantic-release/semantic-release).
Make sure to follow our commit guidelines when commiting. We support [commitizen](http://commitizen.github.io/cz-cli/) styles. Install it via `npm install -g commitizen` and use `git cz` instead of `git commit`.

## Development

```bash
git clone git@github.com:Tradeshift/react-components.git
cd react-components
npm i
npm start
```

Open your browser and visit http://localhost:3003 , see more at [Development Instructions][dev-instructions-url] .

#### Create a new component

```bash
npm run create MyComponent
```
Open: http://localhost:3003/#/components/MyComponent

## Changelog

[CHANGELOG][changelog-url]

## Contributing

We welcome all contributions. Please read our [CONTRIBUTING.md][contributing-url] first. You can submit any ideas as [Pull Requests][pr-url] or as [GitHub issues][issue-url]. If you'd like to improve code, check out the [Development Instructions][dev-instructions-url] and have a good time! :)

## License

Licensed as MIT, see [LICENSE.md](LICENSE.md).


[tooltip-url]: https://tradeshift.github.io/react-components/components/Tooltip
[dev-instructions-url]: https://github.com/Tradeshift/react-components/wiki/Local-development
[changelog-url]: https://tradeshift.github.io/react-components/changelog
[contributing-url]: https://github.com/Tradeshift/react-components/blob/master/.github/CONTRIBUTING.md
[pr-url]: https://github.com/Tradeshift/react-components/pulls
[issue-url]: https://github.com/Tradeshift/react-components/issues
[create-react-app-url]: https://github.com/facebookincubator/create-react-app
[create-react-app-user-guide-url]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
