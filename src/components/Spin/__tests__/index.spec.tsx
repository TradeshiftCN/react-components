import React from 'react';
import { shallow } from 'enzyme';
import Spin from '..';
import SpinIcon from '../SpinIcon';

describe('Spin', () => {
	it('render', () => {
		const wrapper = shallow(<Spin />);

		expect(wrapper).toMatchSnapshot();
	});

	it('embed', () => {
		const wrapper = shallow(<Spin>text</Spin>);
		expect(wrapper).toMatchSnapshot();
		wrapper.setProps({ spinning: true });
		expect(wrapper).toMatchSnapshot();
		wrapper.setProps({ blocking: true });
		expect(wrapper).toMatchSnapshot();
	});

	it('tip', () => {
		expect(shallow(<Spin tip="tip" />)).toMatchSnapshot();
		expect(
			shallow(
				<Spin tip="tip" spinning>
					text
				</Spin>
			)
		).toMatchSnapshot();
	});

	it('icon', () => {
		const wrapper = shallow(<SpinIcon size={100} prefixCls="test" />);
		expect(wrapper).toMatchSnapshot();
		wrapper.setProps({ tip: 'tip' });

		expect(wrapper.find('.test__tip')).toMatchSnapshot();
	});
});
