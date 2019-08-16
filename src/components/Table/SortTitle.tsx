import React from 'react';
import { Column } from './interface';
import cx from 'classnames';

type SortTitleProps<T> = { column: Column<T>; prefixCls: string; order: 'asc' | 'desc' | false };

function SortTitle<T>(props: SortTitleProps<T>) {
	const { prefixCls, column, order } = props;

	return (
		<div className={`${prefixCls}-sort-title`}>
			{column.title}
			{order && (
				<i
					className={cx({
						[`${prefixCls}-sort-title-icon`]: true,
						[`${prefixCls}-sort-title-icon--${order}`]: !!order,
						'ts-icon-triangledown': order === 'desc',
						'ts-icon-triangleup': order === 'asc'
					})}
				></i>
			)}
		</div>
	);
}

export default SortTitle;
