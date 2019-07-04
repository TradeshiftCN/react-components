import React from 'react';
import { shallow } from 'enzyme';
import TimeLineHorizontal from '../index';

describe('#presentational# TimeLineHorizontal', () => {
  it('should render TimeLineHorizontal', () => {
    const props = {
      configData: {
        items: [
          {
            title: '基本资料上传',
            description: '将用于基本信息生成'
          },
          {
            title: '授信资料上传',
            description: '将用于融资授信'
          },
          {
            title: '交易明细上传',
            description: '将用于定制化融资'
          }
        ],
        currentState: '交易明细上传'
      }
    };
    const wrapper = shallow(<TimeLineHorizontal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
