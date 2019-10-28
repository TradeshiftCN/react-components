import React from 'react';
import { shallow, mount } from 'enzyme';
import Aside from '..';

describe('Aside', () => {
	it('render', () => {
		const wrapper = shallow(<Aside />);
		expect(wrapper).toMatchSnapshot();
	});

	it('parent', () => {
		const ref = React.createRef<Aside>();
		const parent = mount(<Aside ref={ref} visible={true} />);
		const child = mount(<Aside parent={ref} visible={true} />);
		const parentInstance = parent.instance() as Aside;
		expect(parentInstance.asideChildren.length).toBe(1);
		child.unmount();
		expect(parentInstance.asideChildren.length).toBe(0);
	});

	it('closable', () => {
		const onClose = jest.fn();
		const wrapper = shallow(<Aside visible={true} onClose={onClose} />);
		wrapper.find('button').simulate('click');
		expect(onClose).toHaveBeenCalled();
		wrapper.setProps({ closable: false });
		expect(wrapper.find('button').exists()).toBe(false);
	});
});
