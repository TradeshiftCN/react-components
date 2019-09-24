import React from 'react';
import { shallow } from 'enzyme';
import Search from '..';

describe('Search', () => {
	const wait = async (time: number) => new Promise(resolve => setTimeout(resolve, time));
	it('basic', () => {
		const wrapper = shallow(<Search />);
		expect(wrapper).toMatchSnapshot();
	});

	it('update value', () => {
		const onChange = jest.fn();
		const wrapper = shallow(<Search onChange={onChange} />);
		const input = wrapper.find('input');
		input.simulate('change', {
			currentTarget: {
				value: 'test'
			}
		});

		expect(wrapper.state('value')).toBe('test');
		expect(onChange.mock.calls[0][0]).toBe('test');
		onChange.mockClear();

		const clearBtn = wrapper.find('.ts-rc-search-remove-icon');
		expect(clearBtn.exists()).toBe(true);
		clearBtn.simulate('click');
		expect(wrapper.state('value')).toBe('');
		expect(onChange.mock.calls[0][0]).toBe('');
	});

	it('render props value', () => {
		const wrapper = shallow(<Search value="value" />);
		expect(wrapper.find('input').props().value).toBe('value');
	});

	it('defaultValue', () => {
		let wrapper;

		wrapper = shallow(<Search defaultValue="default" />);
		expect(wrapper.find('input').props().value).toBe('default');
		wrapper = shallow(<Search value="current" defaultValue="default" />);
		expect(wrapper.find('input').props().value).toBe('current');
	});

	it('search', () => {
		const onSearch = jest.fn();
		const wrapper = shallow(<Search onSearch={onSearch} value="test" />);
		const input = wrapper.find('input');
		input.simulate('keyDown', {
			currentTarget: {
				value: 'value'
			},
			keyCode: 13,
			preventDefault() {}
		});

		expect(onSearch.mock.calls[0][0]).toBe('value');
		onSearch.mockClear();
		wrapper.find('.ts-rc-search-remove-icon').simulate('click');
		expect(wrapper.state('value')).toBe('');
		expect(onSearch).not.toHaveBeenCalled();
	});

	it('debounce', async () => {
		const onSearch = jest.fn();
		const wrapper = shallow(<Search onSearch={onSearch} idleTime={100} />);
		const input = wrapper.find('input');
		input.simulate('change', {
			currentTarget: {
				value: 'test'
			}
		});
		expect(onSearch).not.toHaveBeenCalled();
		await wait(100);
		expect(onSearch.mock.calls[0][0]).toBe('test');
	});
});
