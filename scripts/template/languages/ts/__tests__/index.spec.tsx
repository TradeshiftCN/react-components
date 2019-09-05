import React from 'react';
import { shallow } from 'enzyme';
import {{name}} from '..';

describe('{{name}}', () => {
	it('render', () => {
		const wrapper = shallow(<{{name}} />);

		expect(wrapper.isEmptyRender()).toBe(false);
	});
});
