import React from 'react';
import { shallow } from 'enzyme';
import TimeLineHorizontal from '../index';

describe('TimeLineHorizontal', () => {
	it('should renders correctly', () => {
		const props = {
			configData: {
				items: [
					{
						title: '已经完成的小圆圈',
						description: '完成啦啦啦'
					},
					{
						title: '又一个小圆圈',
						description: '好像也完成了呀'
					},
					{
						title: '当前小圆圈',
						description: '正在完成它'
					},
					{
						title: '没完成的小圆圈',
						description: '马上就完成它'
					},
					{
						title: '最后一个小圆圈',
						description: '终于最后啦啊'
					}
				],
				currentState: '当前小圆圈'
			}
		};
		const wrapper = shallow(<TimeLineHorizontal {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should renders correctly when current is the end', () => {
		const props = {
			configData: {
				items: [
					{
						title: '已经完成的小圆圈',
						description: '完成啦啦啦'
					},
					{
						title: '又一个小圆圈',
						description: '好像也完成了呀'
					},
					{
						title: '最后一个小圆圈',
						description: '终于最后啦啊'
					}
				],
				currentState: '最后一个小圆圈'
			}
		};
		const wrapper = shallow(<TimeLineHorizontal {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
