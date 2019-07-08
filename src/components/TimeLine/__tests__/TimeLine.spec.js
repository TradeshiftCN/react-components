import React from 'react';
import { shallow } from 'enzyme';
import TimeLine from '../index';

describe('TimeLine', () => {
  it('should render correctly', () => {
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
    expect(wrapper).toMatchSnapshot();
  });
});
