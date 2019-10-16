import React from 'react';
import { shallow } from 'enzyme';
import Aside from '..';

describe('Aside', () => {
	it('render', () => {
		const wrapper = shallow(<Aside />);

		expect(wrapper.isEmptyRender()).toBe(false);
	});
});
