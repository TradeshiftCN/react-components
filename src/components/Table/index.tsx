import React, { Component } from 'react';
import cx from 'classnames';
import RcTable from 'rc-table';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Column, RowSelection, Order, ExpandIconProps, Key } from './interface';
import SearchTitle from './SearchTitle';
import SortTitle from './SortTitle';

export type TableProps<T> = {
	data: Array<T>;
	columns: Array<Column<T>>;
	rowKey?: string;
	rowSelection?: RowSelection<T>;
	rowClassName?: ((record: T, index: number, indent: string) => string) | string;
	emptyText?: string | React.ReactNode;
	className?: string;
	id?: string;
	onChange?(query: { search: SearchData; sort: SortData<T> }): void;
	style?: React.CSSProperties;
	scroll?: {
		x?: number;
		y?: number;
	};
	expandedRowRender?(record: T, index: number, indent: string, expanded: boolean): React.ReactNode;
	expandIconColumnIndex?: number;
	expandedRowKeys?: Key[];
	defaultExpandedRowKeys?: Key[];
	defaultExpandAllRows?: boolean;
	onExpand?(expanded: boolean, record: T): void;
	onExpandedRowsChange?(expandedRows: Key[]): void;
	expandedRowClassName?(record: T, index: number, indent: string): string;
	childrenColumnName?: string;
	expandIconAsCell?: boolean;
};
export type TableState<T> = {
	searchActiveColumn?: Key;
	searchData: SearchData;
	sortData: SortData<T>;
};

type SortData<T> = {
	field?: Key;
	order?: Order | false;
	sorter?: Column<T>['sorter'];
};
type SearchData = { [key: string]: string; [key: number]: string };

const prefixCls = 'ts-rc-table';

const checkboxClassName = (isSelected: boolean) =>
	cx({
		'ts-icon-checkbox': !isSelected,
		'ts-icon-checkboxon': isSelected,
		[`${prefixCls}-selection-icon`]: true,
		[`${prefixCls}-selection-icon--checked`]: isSelected
	});

class Table<T> extends Component<TableProps<T>, TableState<T>> {
	static defaultProps = {
		emptyText: '',
		rowKey: 'key',
		childrenColumnName: 'children'
	};
	static propTypes = {
		...RcTable.propTypes,
		data: PropTypes.array.isRequired,
		/** The columns config of table, see table below */
		columns: PropTypes.array.isRequired,
		/** If rowKey is string, `record[rowKey]` will be used as key. If rowKey is function, the return value of `rowKey(record)` will be use as key. */
		rowKey: PropTypes.string,
		rowSelection: PropTypes.shape({
			/** (keys: Key, rows: T[]) => void; */
			onChange: PropTypes.func.isRequired,
			selectedRowKeys: PropTypes.array.isRequired,
			type: PropTypes.oneOf(['checkbox'])
		}),
		/** get row's className (record: T, index: number, indent: string) => string; */
		rowClassName: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
		/** Display text when data is empty */
		emptyText: PropTypes.node,
		className: PropTypes.string,
		/** identifier of the container div */
		id: PropTypes.string,
		/** ({ search, sort }) => void; */
		onChange: PropTypes.func,
		scroll: PropTypes.shape({
			/** table scroll width */
			x: PropTypes.number,
			/** table scroll height */
			y: PropTypes.number
		}),
		/** (record: T, index: number, indent: string, expanded: boolean) => React.ReactNode; */
		expandedRowRender: PropTypes.func,
		expandedRowKeys: PropTypes.array,
		defaultExpandedRowKeys: PropTypes.array,
		defaultExpandAllRows: PropTypes.bool,
		/** (expanded: boolean, record: T) => void; */
		onExpand: PropTypes.func,
		/** function to call when the expanded rows change (expandedRows: Key[]) => void; */
		onExpandedRowsChange: PropTypes.func,
		childrenColumnName: PropTypes.string,
		expandIconAsCell: PropTypes.bool
	};
	static defaultSortDirections: Order[] = ['asc', 'desc'];

	state: TableState<T> = {
		searchData: {},
		searchActiveColumn: undefined,
		sortData: {}
	};

	render() {
		const props = this.props;
		const columns = this.renderRowSelections(this.renderSearch(this.renderSort(props.columns)));
		let data = props.data;
		let expandIconColumnIndex = columns[0].key === 'selection-column' ? 1 : 0;
		let expandIconAsCell = !!this.props.expandedRowRender;
		const { field, order, sorter } = this.state.sortData;

		if (!_.isNil(field) && order && _.isFunction(sorter)) {
			data = data.slice().sort(sorter);
			if (order === 'desc') {
				data.reverse();
			}
		}

		if ('expandIconColumnIndex' in props) {
			expandIconColumnIndex = props.expandIconColumnIndex!;
		}

		if ('expandIconAsCell' in props) {
			expandIconAsCell = props.expandIconAsCell!;
		}

		return (
			<RcTable
				{...props}
				data={data}
				prefixCls={prefixCls}
				columns={columns}
				rowClassName={this.getRowClassName}
				expandIconAsCell={expandIconAsCell}
				expandIcon={this.renderExpandIcon}
				expandIconColumnIndex={expandIconColumnIndex}
			/>
		);
	}

	private get isAllSelected() {
		// FIXME: ts-ui 的逻辑和一般的情况相反，当有一行勾选后全选按钮就被勾选
		// const {
		//   rowSelection: { selectedRowKeys }
		// } = this.props;
		// const { data = [] } = this.props;
		// return (
		//   selectedRowKeys.length &&
		//   selectedRowKeys.length === data.length &&
		//   data.every(row => selectedRowKeys.includes(this.getRowKey(row)))
		// );

		return !!this.props.rowSelection!.selectedRowKeys.length;
	}

	private isSelected(row: T) {
		return this.props.rowSelection!.selectedRowKeys.includes(this.getRowKey(row));
	}

	private getColumnKey(column: Column<T>) {
		return (!_.isNil(column.key) ? column.key : column.dataIndex) as Key;
	}

	private getRowKey(row: T) {
		if (_.isFunction(this.props.rowKey)) {
			return this.props.rowKey(row);
		}

		return _.get(row, this.props.rowKey!);
	}

	private getRowClassName = (row: T, index: number, indent: string) => {
		const classNames = [];
		const { rowSelection, rowClassName } = this.props;

		// 添加上层的自定义 className
		if (rowClassName) {
			if (_.isString(rowClassName)) {
				classNames.push(rowClassName);
			} else if (_.isFunction(rowClassName)) {
				classNames.push(rowClassName(row, index, indent));
			}
		}

		// 添加勾选状态
		if (rowSelection && this.isSelected(row)) {
			classNames.push(`${prefixCls}-row-selected`);
		}

		return cx(classNames);
	};

	private renderSearch(columns: Array<Column<T>>) {
		const { searchData, searchActiveColumn } = this.state;
		return columns.map(column => {
			if (!column.searchTriggers) {
				return column;
			}
			const key = this.getColumnKey(column);
			const patch = {
				title: (
					<SearchTitle
						column={column}
						prefixCls={prefixCls!}
						activeColumn={searchActiveColumn}
						setActiveColumn={this.setActiveColumn}
						columnKey={key}
						isActive={searchActiveColumn === key}
						value={searchData[key] || ''}
						onChange={(text: string) => {
							const data = { ...searchData };
							if (!text) {
								delete data[key];
							} else {
								data[key] = text;
							}
							this.setState({
								searchData: data
							});
						}}
						onSearch={() => {
							this.callChange();
						}}
					></SearchTitle>
				),
				className: cx(`${prefixCls}-search-cell`, column.className)
			};

			return _.merge({}, column, patch);
		});
	}

	private renderSort(columns: Array<Column<T>>) {
		const { sortData } = this.state;
		return columns.map(column => {
			if (!column.sorter) {
				return column;
			}
			const key = this.getColumnKey(column);
			const directions: Order[] =
				column.sortDirections && column.sortDirections.length
					? column.sortDirections
					: Table.defaultSortDirections;
			let order = column.sortOrder;

			if (!order) {
				if (sortData.field === key) {
					order = sortData.order;
				} else {
					order = column.defaultSortOrder || false;
				}
			}
			const patch = {
				title: <SortTitle prefixCls={prefixCls!} column={column} order={order as Order | false} />,
				className: cx(
					{
						[`${prefixCls}-sort-cell--active`]: sortData.field === key && !!order
					},
					`${prefixCls}-sort-cell`,
					column.className
				),
				onHeaderCell: () => {
					let originCellProps: any = {};
					if (column.onHeaderCell) {
						originCellProps = column.onHeaderCell(column);
					}
					return {
						...originCellProps,
						onClick: (e: Event) => {
							if (originCellProps.onClick) {
								originCellProps.onClick(e);
							}

							const orderIndex = directions.indexOf(order as Order); // if order = false, index = -1
							let nextOrder: Order | false = false;
							if (orderIndex < directions.length - 1) {
								nextOrder = directions[orderIndex + 1];
							}
							this.setState({
								sortData: {
									field: key,
									order: nextOrder,
									sorter: column.sorter
								}
							});
							this.callChange();
						}
					};
				}
			};

			return _.merge({}, column, patch);
		});
	}

	private renderRowSelections(columns: Array<Column<T>>) {
		const { rowSelection } = this.props;
		const columnsClone = columns.slice();
		if (rowSelection) {
			columnsClone.unshift({
				key: 'selection-column',
				className: prefixCls + '-selection-column',
				width: 40,
				title: <i className={checkboxClassName(this.isAllSelected)} />,
				onCell: this.onSelectionCell,
				onHeaderCell: this.onSelectionHeaderCell,
				render: this.renderSelectionBox(this.props.rowSelection!.type || 'checkbox')
			});

			return columnsClone;
		}

		return columns;
	}

	private renderSelectionBox(type: RowSelection<T>['type']) {
		return (value: any, row: T, index: number) => {
			switch (type) {
				case 'checkbox':
					return <i className={checkboxClassName(this.isSelected(row))} />;
				default:
					return undefined;
			}
		};
	}

	private onSelectionHeaderCell = () => {
		return {
			onClick: () => {
				this.toggleSelectAllRows();
			}
		};
	};

	private onSelectionCell = (record: T, rowIndex: number) => {
		return {
			onClick: () => {
				const row = this.props.data[rowIndex];
				this.toggleSelectRow(row);
			}
		};
	};

	private toggleSelectAllRows() {
		if (!this.props.data || this.isAllSelected) {
			this.updateSelectedRows([]);
		} else {
			this.updateSelectedRows(this.props.data);
		}
	}

	private toggleSelectRow(row: T) {
		const key = this.getRowKey(row);
		const selectedRowKeys = this.props.rowSelection!.selectedRowKeys.slice();
		const index = selectedRowKeys.indexOf(key);

		if (index > -1) {
			selectedRowKeys.splice(index, 1);
		} else {
			selectedRowKeys.push(key);
		}

		const rows: T[] = selectedRowKeys.map(
			key => this.props.data.find(row => key === this.getRowKey(row)) as T
		);

		this.updateSelectedRows(rows);
	}

	private updateSelectedRows(rows: T[]) {
		if (!Array.isArray(rows)) {
			return;
		}

		const { rowSelection } = this.props;
		const keys = rows.map(this.getRowKey, this);
		rowSelection!.onChange(keys, rows);
	}

	private setActiveColumn = (key?: Key) => {
		this.setState({
			searchActiveColumn: key
		});
	};

	private callChange() {
		Promise.resolve().then(() => {
			if (this.props.onChange) {
				this.props.onChange({
					search: this.state.searchData,
					sort: this.state.sortData
				});
			}
		});
	}

	private renderExpandIcon({
		record,
		expanded,
		expandable,
		onExpand,
		needIndentSpaced
	}: ExpandIconProps<T>) {
		if (expandable) {
			return (
				<i
					className={cx(`${prefixCls}-expand-icon`, {
						'ts-icon-triangledown': expanded,
						'ts-icon-triangleright': !expanded
					})}
					onClick={e => {
						onExpand(record, e);
					}}
				/>
			);
		}

		if (needIndentSpaced) {
			return <span className={`${prefixCls}-row-spaced`}>.</span>;
		}
	}
}

export default Table;
