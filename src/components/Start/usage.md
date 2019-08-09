## 安装

```bash
npm i @tradeshift/react-components
```

## 基础使用

```jsx
import { Button } from '@tradeshift/react-components';

ReactDOM.render(<Button>Name</Button>, mountNode);
```
## 本地启动

```bash
git clone git@github.com:Tradeshift/react-components.git
cd react-components
npm i
npm start
```

打开浏览器访问 http://localhost:3003 ， 更多本地开发文档参见 [Development Instructions][dev-instructions-url] .

## 创建一个新组件

```bash
npm run create MyComponent
```
查看：http://localhost:3003/#/components/MyComponent

## Contribute

Any code pushed to master will be automatically released to `npm` with an appropriate semantic version.
Releases are handled automatically by Jenkins via [semantic release][semantic-release].
Make sure to follow our commit guidelines when commiting. We support [commitizen][commitizen-cli] styles. Install it via 
```bash
npm install -g commitizen
``` 
and use  
```bash
git cz
``` 
instead of `git commit` 


[create-react-app-url]: https://github.com/facebookincubator/create-react-app
[create-react-app-user-guide-url]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
[dev-instructions-url]: https://github.com/Tradeshift/react-components/wiki/Local-development
[semantic-release]: https://github.com/semantic-release/semantic-release
[commitizen-cli]: http://commitizen.github.io/cz-cli/
