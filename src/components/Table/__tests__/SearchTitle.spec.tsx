import React from 'react';
import { shallow, mount } from 'enzyme';
import flushPromises from 'flush-promises';
import SearchTitle from '../SearchTitle';

describe('SearchTitle', () => {
	it('render', () => {
		const onChange = jest.fn();
		const onSearch = jest.fn();
		const setActiveColumn = jest.fn();
		const wrapper = shallow(
			<SearchTitle
				prefixCls="ts"
				column={{
					title: 'search',
					searchTriggers: ['blur', 'enter', 'input']
				}}
				isActive={false}
				columnKey="id"
				onChange={onChange}
				onSearch={onSearch}
				setActiveColumn={setActiveColumn}
				value=""
			/>
		);
		expect(wrapper.find('input').exists()).toBe(false);
		wrapper.setProps({
			isActive: true
		});
		expect(wrapper.find('input').exists()).toBe(true);
		wrapper.setProps({
			isActive: false,
			value: 'test'
		});
		expect(wrapper.find('input').exists()).toBe(true);
	});
});
