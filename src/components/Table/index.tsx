import React, { Component } from 'react';
import cx from 'classnames';
import RcTable from 'rc-table';
import _ from 'lodash';
import { Column, RowSelection, Order } from './interface';
import SearchTitle from './SearchTitle';
import SortTitle from './SortTitle';

type TableProps<T> = {
	/** 数据 */
	data: Array<T>;
	/** 列配置 */
	columns: Array<Column<T>>;
	/** 表格行的唯一 id 的 key */
	rowKey: keyof T;
	/** 修改前缀会丢失默认样式 */
	prefixCls?: string;
	rowSelection?: RowSelection<T>;
	/** 自定义行 className */
	rowClassName?: ((record: T, index: number, indent: string) => string) | string;
	/** 无数据时显示 */
	emptyText?: string | React.ReactNode;
	className?: string;
	/** identifier of the container div */
	id?: string;
	onChange?(query: { search: SearchData; sort: SortData<T> }): void;
};

type TableState<T> = {
	searchActiveColumn?: string | number;
	searchData: SearchData;
	sortData: SortData<T>;
};

type SortData<T> = {
	field?: string | number;
	order?: Order | false;
	sorter?: Column<T>['sorter'];
};
type SearchData = { [key: string]: string; [key: number]: string };

const checkboxClassName = (prefixCls: string, isSelected: boolean) =>
	cx({
		'ts-icon-checkbox': !isSelected,
		'ts-icon-checkboxon': isSelected,
		[`${prefixCls}-selection-icon`]: true,
		[`${prefixCls}-selection-icon--checked`]: isSelected
	});

class Table<T> extends Component<TableProps<T>, TableState<T>> {
	static defaultProps = {
		prefixCls: 'ts-rc-table',
		emptyText: ''
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
		const { field, order, sorter } = this.state.sortData;

		if (!_.isNil(field) && order && _.isFunction(sorter)) {
			data = data.slice().sort(sorter);
			if (order === 'desc') {
				data.reverse();
			}
		}

		return (
			<RcTable
				{...props}
				data={data}
				prefixCls={props.prefixCls}
				columns={columns}
				rowClassName={this.getRowClassName}
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
		return (!_.isNil(column.key) ? column.key : column.dataIndex) as string | number;
	}

	private getRowKey(row: T) {
		if (_.isFunction(this.props.rowKey)) {
			return this.props.rowKey(row);
		}

		return _.get(row, this.props.rowKey);
	}

	private getRowClassName = (row: T, index: number, indent: string) => {
		const classNames = [];
		const { prefixCls, rowSelection, rowClassName } = this.props;

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
		const { prefixCls } = this.props;
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
		const { prefixCls } = this.props;
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
		const { rowSelection, prefixCls } = this.props;
		const columnsClone = columns.slice();
		if (rowSelection) {
			columnsClone.unshift({
				key: 'selection-column',
				className: prefixCls + '-selection-column',
				width: 40,
				title: <i className={checkboxClassName(prefixCls!, this.isAllSelected)} />,
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
					return <i className={checkboxClassName(this.props.prefixCls!, this.isSelected(row))} />;
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

	private setActiveColumn = (key?: string | number) => {
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
}

export default Table;
