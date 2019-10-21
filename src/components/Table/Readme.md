### Basic Usage

```jsx
const columns = [
	{
		title: 'One',
		dataIndex: 'one'
	},
	{
		title: 'Align right',
		dataIndex: 'two',
		align: 'right'
	},
	{
		title: 'CUstom th/td props',
		dataIndex: 'three',
		onCell(row) {
			return {
				style: {
					color: 'red'
				},
				title: `id: ${row.id}`
			};
		},
		onHeaderCell(column) {
			return {
				style: {
					color: 'green'
				},
				title: `id: ${column.dataIndex}`
			};
		}
	},
	{
		title: 'Action',
		key: 'action',
		render() {
			return (
				<div>
					<a>edit</a> | <a>delete</a>
				</div>
			);
		}
	}
];

const data = [
	{
		id: 1,
		one: 'A',
		two: 'B',
		three: 'C'
	},
	{
		id: 2,
		one: 'D',
		two: 'E',
		three: 'F'
	},
	{
		id: 3,
		one: 'G',
		two: 'H',
		three: 'I'
	}
];

<Table columns={columns} data={data} rowKey="id" />;
```

### Selection

```jsx
const columns = [
	{
		title: 'One',
		dataIndex: 'one'
	},
	{
		title: 'Two',
		dataIndex: 'two'
	},
	{
		title: 'Three',
		dataIndex: 'three'
	}
];

const data = [
	{
		id: 1,
		one: 'A',
		two: 'B',
		three: 'C'
	},
	{
		id: 2,
		one: 'D',
		two: 'E',
		three: 'F'
	},
	{
		id: 3,
		one: 'G',
		two: 'H',
		three: 'I'
	}
];

initialState = { selectedRowKeys: [] };

<Table
	columns={columns}
	data={data}
	rowKey="id"
	rowSelection={{
		selectedRowKeys: state.selectedRowKeys,
		onChange: keys => setState({ selectedRowKeys: keys })
	}}
/>;
```

### Search

```jsx
const columns = [
	{
		title: 'Front-end search',
		dataIndex: 'one',
		searchTriggers: true,
		width: 200
	},
	{
		title: 'Back-end search',
		dataIndex: 'two',
		searchDebounceTime: 500,
		searchTriggers: ['enter', 'input']
	},
	{
		title: 'No search',
		dataIndex: 'three'
	}
];

const data = [
	{
		id: 1,
		one: 'press enter to search',
		two: 'search when stop input',
		three: 'C'
	},
	{
		id: 2,
		one: 'no debounce',
		two: 'delay 500ms',
		three: 'F'
	},
	{
		id: 3,
		one: 'G',
		two: 'H',
		three: 'I'
	}
];

const onChange = query => {
	setState({
		data: data.filter(v =>
			Object.keys(query.search).every(key => v[key].includes(query.search[key]))
		)
	});
};

initialState = { data: data };

<Table columns={columns} data={state.data} rowKey="id" onChange={onChange} />;
```

### Sort

```jsx
const columns = [
	{
		title: 'Local sort',
		dataIndex: 'one',
		sorter: (a, b) => a.one - b.one,
		sortDirections: ['desc', 'asc'] // 默认值 - 降序/升序/不排序
	},
	{
		title: 'Server sort',
		dataIndex: 'two',
		sorter: true,
		sortDirections: ['asc'] // 升序/不排序
	}
];
const data = [
	{
		id: 1,
		one: 1,
		two: 3
	},
	{
		id: 2,
		one: 2,
		two: 2
	},
	{
		id: 3,
		one: 3,
		two: 1
	}
];
initialState = { data: data };

<Table
	columns={columns}
	data={state.data}
	rowKey="id"
	onChange={({ sort }) => {
		const { field, order } = sort;

		// 这里只 mock 第二列
		if (field === 'two') {
			setTimeout(() => {
				setState({
					data: order === 'asc' ? data.slice().reverse() : data
				});
			}, 500);
		}
	}}
/>;
```

### Fixed Header

```jsx
const data = [];
const columns = [
	{
		title: 'name',
		dataIndex: 'name',
		width: 1500
	},
	{
		title: 'id',
		dataIndex: 'key',
		width: 100
	}
];
for (let i = 1; i <= 100; i++) {
	data.push({
		name: `row ${i} `.repeat(49),
		key: i
	});
}
<Table
	data={data}
	columns={columns}
	rowKey="key"
	scroll={{
		y: 260,
		x: 1600
	}}
/>;
```

### Expandable Row

_Note: If you want to hide expand icon of special row, you can add a className `ts-rc-table-row--unexpandable` [Set Table expandable property at row level](https://github.com/ant-design/ant-design/issues/7817)_

```jsx
const data = [
	{
		id: 1,
		data: [11, 12, 13]
	},
	{
		id: 2,
		data: [21]
	},
	{
		id: 3
	}
];
const columns = [
	{
		title: 'id',
		dataIndex: 'id'
	}
];
const renderSubRow = row => {
	if (row.data) {
		return (
			<table>
				<tbody>
					{row.data.map(v => (
						<tr key={v}>
							<td>child: {v}</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
};
<Table
	data={data}
	columns={columns}
	rowKey="id"
	rowClassName={row => {
		if (!row.data) {
			return 'ts-rc-table-row--unexpandable';
		}
	}}
	expandedRowRender={renderSubRow}
	defaultExpandedRowKeys={[1, 2, 3]}
/>;
```

P.S. 如果列配置中同时启用了 sorter 和 searchTriggers，仅有**查询**功能会生效（因为 ts-ui 的布局冲突）

### Interface

```ts static
export type Order = 'desc' | 'asc';

export interface Column<T> {
	key?: Key;
	dataIndex?: string;
	width?: string | number;
	fixed?: 'left' | 'right' | boolean;
	colSpan?: number;
	className?: string;
	title: React.ReactNode | string;
	align?: string;
	searchDebounceTime?: number;
	/** 响应 search 的操作，设为 true 则使用默认配置 */
	searchTriggers?: Array<'blur' | 'input' | 'enter'> | boolean;
	/** 排序的方法，设为 true 时仅显示排序按钮 */
	sorter?: ((a: T, b: T) => number) | boolean;
	sortOrder?: Order | false;
	sortDirections?: Array<Order>;
	defaultSortOrder?: Order;
	onCell?(record: T, index: number): any;
	onHeaderCell?(column: Column<T>): any;
	render?(value: any, row: T, index: number): React.ReactNode | string;
}
```
