import React from 'react';
import RcDrawer from 'rc-drawer';
import PropTypes from 'prop-types';
import cx from 'classnames';

type AsideParent = React.RefObject<Aside>;
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
	parent?: AsideParent | AsideParent[];
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
		onClose: PropTypes.func
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
		const { visible, children, title, closable, className, ...drawerProps } = this.props;

		return (
			<RcDrawer
				{...drawerProps}
				className={cx(className, { [`${prefixCls}--closable`]: closable })}
				prefixCls={prefixCls}
				open={this.asideChildren.some(v => v.props.visible) ? false : visible}
				handler={false}
				level={null}
				onChange={this.handleChange}
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
		this.parents.forEach(aside => {
			if (!aside.asideChildren.includes(this)) {
				aside.asideChildren.push(this);
				aside.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.parents.forEach(aside => {
			const index = aside.asideChildren.indexOf(this);
			if (index >= 0) {
				aside.asideChildren.splice(index, 1);
				aside.forceUpdate();
			}
		});
	}

	get parents() {
		const { parent } = this.props;
		if (this.props.parent) {
			const parents = Array.isArray(parent)
				? parent.map(v => v.current)
				: [(parent as AsideParent).current];
			return parents.filter(v => !!v) as Aside[];
		}

		return [];
	}

	private handleChange = (open?: boolean) => {
		if (this.props.onChange) {
			this.props.onChange(open);
		}

		this.parents.forEach(aside => {
			aside.forceUpdate();
		});
	};
}

export default Aside;
