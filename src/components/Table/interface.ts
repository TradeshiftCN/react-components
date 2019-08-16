export type Order = 'desc' | 'asc';

export interface Column<T> {
	key?: string;
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

export interface RowSelection<T> {
	onChange(keys: Array<string | number>, rows: Array<T>): void;
	selectedRowKeys: Array<string>;
	type?: 'checkbox';
}
