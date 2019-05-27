## 安装

```bash
npm i @tradeshift/react-components
```

## 基础使用

```jsx
import Button from '@tradeshift/react-components/lib/Button';
import '@tradeshift/react-components/dist/ui.min.css';

ReactDOM.render(<Button>Name</Button>, mountNode);
```

## 在 create-react-app 中使用

[create-react-app][create-react-app-url] 是业界最优秀的 React 应用开发工具之一，我们会尝试在 `create-react-app` 创建的工程中使用 `react-components` 组件。

首先，需要在命令行中安装 `create-react-app` 工具，[详细安装说明][create-react-app-url] 。

现在从 npm 安装并引入 `@tradeshift/react-components` 。

```bash
npm i @tradeshift/react-components
```

修改 `src/App.js`，引入 `@tradeshift/react-components` 的按钮组件。

```jsx
import React, { Component } from 'react';
import './App.css';
import Button from '@tradeshift/react-components/lib/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button icon="add">添加</Button>
      </div>
    );
  }
}

export default App;
```

修改 `src/App.css`，在文件顶部引入 `@tradeshift/react-components/dist/ui.min.css` 。

```css
@import '~@tradeshift/react-components/dist/ui.min.css';

.App {
  text-align: center;
}

...
```

现在你应该能看到页面上已经有了 `react-components` 的按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程可以参考 [User Guide][create-react-app-user-guide-url] .

[create-react-app-url]: https://github.com/facebookincubator/create-react-app
[create-react-app-user-guide-url]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
