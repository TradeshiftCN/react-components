import { Redirect, Router, LocationProvider } from '@reach/router';
import NProgress from 'nprogress';
import React from 'react';
import ReactDOM from 'react-dom';
import Imported, { whenComponentsReady } from 'react-imported-component';
import { HashRouter } from './HashRouter';
import Chrome from './apps/Chrome';
import App from './apps/index';
import 'earth-ui/dist/earth-ui.min.css';

const asyncComponent = path =>
  Imported(() => {
    NProgress.start();
    whenComponentsReady().then(() => {
      !['/', 'InProgress'].includes(path) && NProgress.done();
    });
    return path.match('.dox')
      ? import(`../src/components/${path}`)
      : import(`./apps/${path}`);
  });

const WIP = ['Table'];

const getComponentDoc = component => {
  if (WIP.includes(component)) {
    return 'InProgress';
  }
  return `${component.split('-')[0]}/docs/${component}.dox`;
};

const Start = routeProps =>
  React.createElement(asyncComponent('Start'), { routeProps: routeProps });
const Dox = routeProps =>
  React.createElement(asyncComponent(getComponentDoc(routeProps.component)));
const NotFound = () => React.createElement(asyncComponent('NotFound'));

console.log('history', history);

ReactDOM.render(
  <LocationProvider history={HashRouter}>
    <Router>
      <App path="/">
        <Chrome path="/">
          <Start path="/start/:tab" />
          <Dox path="/components/:component" />
        </Chrome>
        {/* from means relative path, to means abs path */}
        <Redirect noThrow from="/" to="/start/usage" />
      </App>
      <NotFound default />
    </Router>
  </LocationProvider>,
  document.getElementById('app')
);
