import React, { Component } from 'react';
import cx from 'classnames';
import SpinIcon from './SpinIcon';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Overwrite } from '../../helper';

export type SpinProps = Overwrite<
	React.HTMLProps<HTMLDivElement>,
	{
		spinning?: boolean;
		size?: 'small' | 'default' | 'large';
		blocking?: boolean;
		tip?: string;
	}
>;
export type SpinState = {};

const prefixCls = 'ts-rc-spin';
const sizes = {
	small: 30,
	default: 65,
	large: 100
};
class Spin extends Component<SpinProps, SpinState> {
	static propTypes = {
		spinning: PropTypes.bool,
		size: PropTypes.oneOf(['small', 'default', 'large']),
		blocking: PropTypes.bool,
		tip: PropTypes.string
	};
	static defaultProps = {
		size: 'default',
		spinning: false,
		blocking: false
	};
	render() {
		const spinIconProps = {
			prefixCls: prefixCls,
			size: sizes[this.props.size!],
			tip: this.props.tip
		};
		if (!React.Children.count(this.props.children)) {
			return (
				<SpinIcon {...spinIconProps} className={this.props.className} style={this.props.style} />
			);
		}
		const containerProps = _.omit(this.props, ['className', 'spinning', 'size', 'tip', 'blocking']);
		return (
			<div className={cx(`${prefixCls}__container`, this.props.className)} {...containerProps}>
				{this.props.children}
				{this.props.spinning && this.props.blocking && <div className={`${prefixCls}__mask`} />}
				{this.props.spinning && (
					<div className={`${prefixCls}__spinning`}>
						<SpinIcon {...spinIconProps} />
					</div>
				)}
			</div>
		);
	}
}

export default Spin;
