import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';

describe('Button', () => {
	it('basic', () => {
		const wrapper = shallow(<Button>btn</Button>);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.html()).toBe(shallow(<Button label="btn" />).html());

		wrapper.setProps({
			size: 'small',
			type: 'primary',
			loading: true
		});
		expect(wrapper).toMatchSnapshot();
	});

	it('icon', () => {
		const wrapper = shallow(<Button icon="test" />);
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({ label: 'text' });
		expect(wrapper).toMatchSnapshot();
	});

	it('empty', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it('children', () => {
		const wrapper = shallow(
			<Button>
				text <b>element</b>
			</Button>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('exception', () => {
		expect(() => shallow(<Button icon="test" size="small" />)).toThrowError();
	});
});
