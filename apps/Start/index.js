import React from 'react';
import { Col, Row } from 'earth-ui/lib/Layout';
import Markdown from 'widgets/Markdown';
import PropTypes from 'prop-types';

const asyncComponent = fileName => import(`./${fileName}.md`);

class Start extends React.Component {
  constructor(props) {
    super();
    this.state = {
      md: ''
    };
    asyncComponent(props.routeProps.tab).then(({ default: md }) => {
      this.setState({ md });
    });
  }

  render() {
    return (
      <div className="start">
        <Row>
          <Col col="md-16" className="demo__left">
            <Markdown html={this.state.md} />
          </Col>
        </Row>
      </div>
    );
  }
}

Start.propTypes = {
  routeProps: PropTypes.object
};

export default Start;
