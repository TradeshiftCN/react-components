import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const TimeLine = props => {
  const { timelines, activeIndex } = props;
  return (
    <div>
      {timelines.map((timeline, index) => (
        <div
          className={`timeline ${activeIndex === index && 'active'}`}
          key={timeline.id}
        >
          <i className="circle" />
          <div className="content">
            <div className="time">{timeline.time}</div>
            <div className="status">{timeline.status}</div>
            <div className="number">{timeline.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

TimeLine.propTypes = {
  // TimeLine配置数组
  timelines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      time: PropTypes.string,
      status: PropTypes.string,
      name: PropTypes.string
    })
  ),
  // 当前节点下标
  activeIndex: PropTypes.number
};

export default TimeLine;
