import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../';

describe('Pagination', () => {
	it('basic', () => {
		const wrapper = shallow(<Pagination></Pagination>);
		// no pages
		expect(wrapper.isEmptyRender()).toBe(true);

		wrapper.setProps({
			pages: 3
		});
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({
			pages: 4,
			page: 2
		});
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({
			pages: 9,
			page: 3
		});
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({
			pages: 9,
			page: 7
		});
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({
			pages: 9,
			page: 9
		});
		expect(wrapper).toMatchSnapshot();

		wrapper.setProps({ pages: undefined });
		expect(wrapper.isEmptyRender()).toBe(true);
	});

	it('event', () => {
		const onChange = jest.fn();
		const wrapper = shallow(<Pagination pages={8} onChange={onChange}></Pagination>);

		// if missing page, Pagination will set default value
		expect(onChange.mock.calls[0][0]).toBe(1);

		onChange.mockClear();
		wrapper
			.find('button')
			.at(7)
			.simulate('click');
		expect(onChange.mock.calls[0][0]).toBe(2);

		onChange.mockClear();
		wrapper
			.find('button')
			.last()
			.simulate('click');

		expect(onChange.mock.calls[0][0]).toBe(8);

		onChange.mockClear();
		wrapper
			.find('button')
			.at(1)
			.simulate('click');
		expect(onChange.mock.calls[0][0]).toBe(7);

		onChange.mockClear();
		wrapper
			.find('button')
			.first()
			.simulate('click');
		expect(onChange.mock.calls[0][0]).toBe(1);

		onChange.mockClear();
		wrapper
			.find('button')
			.at(4)
			.simulate('click');
		expect(onChange.mock.calls[0][0]).toBe(3);
	});

	it('pass props', () => {
		const onChange = jest.fn((page: number) => {
			wrapper.setProps({
				page
			});
		});
		const wrapper = shallow(<Pagination pages={12} onChange={onChange} page={5}></Pagination>);

		expect(wrapper.find('.ts-rc-pagination-btn--active').text()).toBe('5');
		wrapper
			.find('button')
			.at(7)
			.simulate('click');
		expect(onChange.mock.calls[0][0]).toBe(6);
	});
});
