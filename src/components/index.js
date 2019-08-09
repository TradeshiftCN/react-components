import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

class App extends React.Component {
  render() {
    let { children } = this.props;
    return <div className="wrapper">{children}</div>;
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
