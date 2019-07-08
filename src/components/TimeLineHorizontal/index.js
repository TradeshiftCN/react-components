import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const getStateClass = (itemIndex, currentReadyStateIndex, lastIndex) => {
  if (
    itemIndex < currentReadyStateIndex &&
    itemIndex !== currentReadyStateIndex - 1
  ) {
    return 'ready';
  }
  if (itemIndex === currentReadyStateIndex - 1) {
    return 'left-of-current-state';
  }
  if (itemIndex === currentReadyStateIndex && itemIndex === lastIndex) {
    return 'current-end';
  }
  if (itemIndex === currentReadyStateIndex) {
    return 'current';
  }
  if (itemIndex > currentReadyStateIndex && itemIndex !== lastIndex) {
    return 'un-ready';
  }
  if (itemIndex === lastIndex) {
    return 'end';
  }
};

const TimeLineHorizontal = props => {
  const { configData } = props;
  return (
    <div className="time-line-container">
      {configData.items.map((item, index, arr) => {
        const currentReadyStateIndex = configData.items.findIndex(
          element => element.title === configData.currentState
        );
        let stateNode = null;
        if (index === currentReadyStateIndex) {
          stateNode = (
            <div>
              <div
                className={`circle ${getStateClass(
                  index,
                  currentReadyStateIndex,
                  arr.length - 1
                )}`}
              />
              <div className="out-circle" />
            </div>
          );
        } else {
          stateNode = (
            <div
              className={`circle ${getStateClass(
                index,
                currentReadyStateIndex,
                arr.length - 1
              )}`}
            />
          );
        }
        return (
          <div
            key={item.title}
            className={`time-line-node ${getStateClass(
              index,
              currentReadyStateIndex,
              arr.length - 1
            )}`}
          >
            {stateNode}
            <div>{item.title}</div>
            <div>({item.description})</div>
          </div>
        );
      })}
    </div>
  );
};

TimeLineHorizontal.propTypes = {
  // TimeLineHorizontal配置对象
  configData: PropTypes.object
};

export default TimeLineHorizontal;
