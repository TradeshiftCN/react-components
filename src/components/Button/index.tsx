import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';

export type ButtonProps = {
	type?: 'default' | 'primary' | 'danger' | 'warning';
	className?: string;
	loading?: boolean;
	size?: 'small';
	children?: React.ReactNode;
	icon?: string;
	label?: string;
	disabled?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const prefixCls = 'ts-rc-button';

function genButtonLabel(children: React.ReactNode) {
	return React.Children.map(children, child => {
		if (_.isString(child)) {
			return <span>{child}</span>;
		}

		return child;
	});
}

function Button(props: ButtonProps) {
	const { type, className, loading, size, children, icon, label, disabled, ...buttonProps } = props;
	const labelNodes = React.Children.count(children) ? children : label;
	const hasOnlyIcon = !_.isNil(icon) && _.isNil(labelNodes);
	if (_.isNil(labelNodes) && _.isNil(icon)) {
		return null;
	}

	if (size === 'small' && icon) {
		throw new Error("small size can't used with icon");
	}

	return (
		<button
			{...buttonProps}
			className={cx(prefixCls, className, `${prefixCls}--${type}`, {
				[`${prefixCls}--${size}`]: !!size,
				[`${prefixCls}--circle`]: hasOnlyIcon,
				[`${prefixCls}--loading`]: !!loading
			})}
			disabled={!!loading || !!props.disabled}
		>
			{!!icon && <i className={`ts-icon-${icon}`} />}
			{!_.isNil(labelNodes) && genButtonLabel(labelNodes)}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.oneOf(['default', 'primary', 'danger', 'warning']),
	loading: PropTypes.bool,
	className: PropTypes.string,
	size: PropTypes.oneOf(['small']),
	children: PropTypes.node,
	icon: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	type: 'default',
	loading: false
};

export default Button;
