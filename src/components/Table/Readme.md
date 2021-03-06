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

_note: If you want to enable sort and search by set `sorter` and `searchTriggers`, **only search** will work because there are some UI conflicts. for more information, please view [tradeshift-ui](http://ui.tradeshift.com/v12/#components/table/searching.html)_

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
		id: 1
	},
	{
		id: 2
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

<Table
	data={data}
	columns={columns}
	rowKey="id"
	rowClassName={row => {
		if (row.id === 3) {
			return 'ts-rc-table-row--unexpandable';
		}
	}}
	expandedRowRender={row => <p style={{ color: 'red' }}>Parent ID: {row.id}</p>}
	defaultExpandedRowKeys={[1, 2]}
/>;
```

### Tree Data

Display tree structure data in Table when there is field key `children` in dataSource, try to customize `childrenColumnName` property to avoid tree table structure.

_Note: If only 1 child level, we recommend to set `expandIconAsCell` to `true`_

```jsx
const data = [
	{
		id: 1,
		children: [
			{
				id: 11
			},
			{
				id: 12
			}
		]
	},
	{
		id: 2,
		children: [
			{
				id: 21
			}
		]
	},
	{
		id: 3
	}
];
const columns = [
	{
		title: 'id',
		dataIndex: 'id'
	},
	{
		title: 'second id',
		dataIndex: 'id',
		key: 'second'
	},
	{
		title: 'third id',
		dataIndex: 'id',
		key: 'third'
	}
];

<Table data={data} columns={columns} rowKey="id" expandIconAsCell />;
```

```jsx
const data = [
	{
		id: 1,
		data: [
			{
				id: 11
			},
			{
				id: 12,
				data: [
					{
						id: 121
					}
				]
			}
		]
	},
	{
		id: 2,
		data: [
			{
				id: 21
			}
		]
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

<Table data={data} columns={columns} rowKey="id" childrenColumnName="data" />;
```

#### Difference with expandable table

Tree table will share the thead of parent table but expandable table not, that's meaning you can't align with parent in expandable table.

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
