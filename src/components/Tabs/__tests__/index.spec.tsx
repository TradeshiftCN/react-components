import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '..';

describe('Tabs', () => {
	it('basic', () => {
		const wrapper = shallow(<Tabs />);

		expect(wrapper).toMatchSnapshot();
	});
});
