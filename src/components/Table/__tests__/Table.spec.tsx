import React from 'react';
import { shallow, mount } from 'enzyme';
import flushPromises from 'flush-promises';
import Table from '..';

describe('Table', () => {
	it('basic', () => {
		const wrapper = shallow(
			<Table
				data={[{ id: 1, value: 11 }, { id: 2, value: 22 }]}
				columns={[{ title: 'id', dataIndex: 'id' }, { title: 'value', dataIndex: 'value' }]}
				rowKey="id"
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('selection', async () => {
		const onChange = jest.fn((keys: number[]) => {
			wrapper.setProps({ ...wrapper.props(), rowSelection: { onChange, selectedRowKeys: keys } });
		});
		const wrapper = mount(
			<Table
				data={[{ id: 1, value: 11 }, { id: 2, value: 22 }]}
				columns={[{ title: 'id', dataIndex: 'id' }, { title: 'value', dataIndex: 'value' }]}
				rowKey="id"
				rowSelection={{ onChange, selectedRowKeys: [] }}
			/>
		);

		// select first row
		wrapper
			.find('tbody tr')
			.first()
			.find('.ts-rc-table-selection-icon')
			.simulate('click');
		await flushPromises();
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange.mock.calls[0]).toEqual([[1], [{ id: 1, value: 11 }]]);
		expect(wrapper.find('thead .ts-rc-table-selection-icon--checked').exists()).toBe(true);

		// deselect all rows
		wrapper.find('thead .ts-rc-table-selection-icon').simulate('click');
		await flushPromises();
		expect(onChange).toHaveBeenCalledTimes(2);
		expect(onChange.mock.calls[1]).toEqual([[], []]);
		expect(wrapper.find('thead .ts-rc-table-selection-icon--checked').exists()).toBe(false);

		// select all rows
		wrapper.find('thead .ts-rc-table-selection-icon').simulate('click');
		await flushPromises();
		expect(onChange).toHaveBeenCalledTimes(3);
		expect(onChange.mock.calls[2]).toEqual([[1, 2], [{ id: 1, value: 11 }, { id: 2, value: 22 }]]);
		expect(wrapper.find('thead .ts-rc-table-selection-icon--checked').exists()).toBe(true);
	});

	it('search', async () => {
		const onChange = jest.fn();
		const wrapper = mount(
			<Table
				data={[{ id: 1, value: 11 }, { id: 2, value: 22 }]}
				columns={[
					{ title: 'id', dataIndex: 'id', searchTriggers: true },
					{ title: 'value', dataIndex: 'value', searchTriggers: ['input'] }
				]}
				rowKey="id"
				onChange={onChange}
			/>
		);

		expect(wrapper.find('thead .ts-icon-search').length).toBe(2);

		wrapper
			.find('thead .ts-icon-search')
			.first()
			.simulate('click');
		await flushPromises();
		expect(
			wrapper
				.find('thead th')
				.first()
				.find('input')
				.exists()
		).toBe(true);

		wrapper
			.find('thead th')
			.first()
			.find('input')
			.simulate('change', { target: { value: 'keyword' } })
			.simulate('keydown', { keyCode: 13 });
		await flushPromises();
		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange.mock.calls[0][0].search).toEqual({ id: 'keyword' });
	});

	it('sort', async () => {
		const wrapper = mount(
			<Table
				data={[{ id: 1, value: 11 }, { id: 2, value: 22 }]}
				columns={[
					{ title: 'id', dataIndex: 'id', sorter: true },
					{ title: 'value', dataIndex: 'value', sorter: (a, b) => a.id - b.id }
				]}
				rowKey="id"
			/>
		);

		wrapper
			.find('thead .ts-rc-table-sort-cell')
			.first()
			.simulate('click');
		await flushPromises();
		expect(wrapper.find('.ts-rc-table-sort-title-icon--asc').exists()).toBe(true);

		wrapper
			.find('thead .ts-rc-table-sort-cell')
			.first()
			.simulate('click');
		expect(wrapper.find('.ts-rc-table-sort-title-icon--desc').exists()).toBe(true);

		wrapper
			.find('thead .ts-rc-table-sort-cell')
			.first()
			.simulate('click');
		expect(wrapper.find('.ts-rc-table-sort-title-icon--asc').exists()).toBe(false);
		expect(wrapper.find('.ts-rc-table-sort-title-icon--desc').exists()).toBe(false);
	});
});
