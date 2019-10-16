import React from 'react';
import RcDrawer from 'rc-drawer';
import PropTypes from 'prop-types';
import cx from 'classnames';

export type AsideProps = {
	className?: string;
	children?: React.ReactNode;
	visible?: boolean;
	width?: number;
	placement?: 'left' | 'right';
	showMask?: boolean;
	maskClosable?: boolean;
	title?: React.ReactNode;
	style?: React.CSSProperties;
	closable?: boolean;
	onClose?(): void;
};

const prefixCls = 'ts-rc-aside';

function Aside(props: AsideProps) {
	const { visible, children, title, closable, className, ...drawerProps } = props;
	return (
		<RcDrawer
			{...drawerProps}
			className={cx(className, { [`${prefixCls}--closable`]: closable })}
			prefixCls={prefixCls}
			open={visible}
			handler={false}
			level={null}
		>
			<header className={`${prefixCls}-header`}>
				{title}
				{closable && (
					<button
						type="button"
						className={`${prefixCls}-close-btn`}
						onClick={() => {
							if (props.onClose) {
								props.onClose();
							}
						}}
					>
						<i className="ts-icon-close"></i>
					</button>
				)}
			</header>
			<div className={`${prefixCls}-body`}>{children}</div>
		</RcDrawer>
	);
}

Aside.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
	visible: PropTypes.bool,
	width: PropTypes.number,
	placement: PropTypes.oneOf(['left', 'right']),
	showMask: PropTypes.bool,
	maskClosable: PropTypes.bool,
	title: PropTypes.node,
	style: PropTypes.object,
	closable: PropTypes.bool,
	onClose: PropTypes.func
};

Aside.defaultProps = {
	width: 320,
	placement: 'right',
	maskClosable: true,
	showMask: true,
	closable: true
};

export default Aside;
