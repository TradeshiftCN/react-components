import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.less';

class TimeLine extends React.Component {
  render() {
    const { timelines } = this.props;
    return (
      <div>
        {timelines.map((timeline, index) => (
          <div
            className={`timeline ${this.props.activeIndex === index &&
              'active'}`}
            key={timeline.time}
          >
            <i className="circle" />
            <div className="content">
              <div className="time">
                {moment(timeline.time).format('YYYY-MM-DD HH:mm')}
              </div>
              <div className="status">{timeline.status}</div>
              <div className="number">{timeline.name}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

TimeLine.propTypes = {
  // TimeLine配置数组
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      status: PropTypes.string,
      name: PropTypes.string
    })
  ),
  // 当前节点下标
  activeIndex: PropTypes.number
};

export default TimeLine;
