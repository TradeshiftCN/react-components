import React from 'react';
import RcDrawer from 'rc-drawer';
import PropTypes from 'prop-types';
import cx from 'classnames';
import _ from 'lodash';

type AsideParent = React.RefObject<Aside> | Array<React.RefObject<Aside>>;

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
	parent?: AsideParent;
	onChange?(open?: boolean): void;
};

const prefixCls = 'ts-rc-aside';

class Aside extends React.Component<AsideProps> {
	static propTypes = {
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
		onClose: PropTypes.func,
		parent: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
		onChange: PropTypes.func
	};
	static defaultProps = {
		width: 320,
		placement: 'right',
		maskClosable: true,
		showMask: true,
		closable: true
	};
	public asideChildren: Aside[] = [];

	render() {
		const { visible, children, title, closable, className, parent, ...drawerProps } = this.props;
		return (
			<RcDrawer
				{...drawerProps}
				className={cx(className, { [`${prefixCls}--closable`]: closable })}
				prefixCls={prefixCls}
				open={this.asideChildren.some(v => v.props.visible) ? false : visible}
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
								if (this.props.onClose) {
									this.props.onClose();
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

	componentDidMount() {
		this.updateParent(this.props.parent, undefined);
	}

	componentDidUpdate(prevProps: AsideProps) {
		this.updateParent(this.props.parent, prevProps.parent);
		if (this.props.visible !== prevProps.visible) {
			setTimeout(() => {
				this.getParents(this.props.parent).forEach(aside => {
					aside.forceUpdate();
				});
			});
		}
	}

	componentWillUnmount() {
		this.updateParent(undefined, this.props.parent);
	}

	private getParents(parent?: AsideParent) {
		if (!parent) {
			return [];
		}
		const parents = Array.isArray(parent) ? parent.map(v => v.current) : [parent.current];
		return _.compact(parents);
	}

	private updateParent(parent?: AsideParent, prevParent?: AsideParent) {
		if (parent === prevParent) {
			return;
		}
		const parents = this.getParents(parent);
		const prevParents = this.getParents(prevParent);
		const increase = _.difference(parents, prevParents);
		const decrease = _.difference(prevParents, parents);

		increase.forEach(aside => {
			if (!aside.asideChildren.includes(this)) {
				aside.asideChildren.push(this);
			}
		});
		decrease.forEach(aside => {
			const index = aside.asideChildren.indexOf(this);
			if (index >= 0) {
				aside.asideChildren.splice(index, 1);
				aside.forceUpdate();
			}
		});
	}
}

export default Aside;
