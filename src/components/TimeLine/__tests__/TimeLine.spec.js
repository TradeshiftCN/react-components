import React from 'react';
import { shallow } from 'enzyme';
import TimeLine from '../index';

describe('TimeLine', () => {
  const props = {
    timelines: [
      {
        time: '2019-07-01 15:20',
        status: '处理成功',
        name: 'puff'
      },
      {
        time: '2019-06-30 13:54',
        status: '创建成功',
        name: 'puff'
      }
    ],
    activeIndex: 0
  };
  const wrapper = shallow(<TimeLine {...props} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should has two item', () => {
    expect(wrapper.find('i').length).toBe(2);
  });

  it('should has one active item', () => {
    expect(wrapper.find('.active').length).toBe(1);
  });
});
