import React from 'react';
import { shallow } from 'enzyme';
import TimeLine from '../index';

describe('#presentational# TimeLine', () => {
  it('should render TimeLine', () => {
    const props = {
      timelines: [
        {
          time: '2019-07-01T07:20:28.473Z',
          status: '处理成功',
          name: 'puff'
        },
        {
          time: '2019-06-30T05:54:50.891Z',
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
