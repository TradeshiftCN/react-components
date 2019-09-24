import React from 'react';
import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

type HTMLButtonElementProps = React.HTMLProps<HTMLButtonElement> &
	React.HTMLAttributes<HTMLButtonElement>;
type NavigationBtn = React.ReactNode | HTMLButtonElementProps | boolean;

export type HeaderProps = {
	title?: string | React.ReactNode;
	icon?: string;
	theme?: 'blue' | 'white';
	tabs?: React.ReactNode;
	search?: React.ReactNode;
	backButton?: NavigationBtn;
	forwardButton?: NavigationBtn;
	buttons?: React.ReactNode[];
	className?: string;
};

type NavigationBtnConfig = {
	key: string;
	icon: string;
	btn: NavigationBtn;
	onClick(): void;
};

const prefixCls = 'ts-rc-header';

function genNavigationBtns(
	className: string,
	backButton?: NavigationBtn,
	forwardButton?: NavigationBtn
) {
	const navigationBtns: React.ReactNode[] = _.compact(
		([
			{
				key: 'back',
				btn: backButton,
				icon: 'ts-icon-arrowleft',
				onClick: () => {
					window.history.back();
				}
			},
			{
				key: 'forward',
				btn: forwardButton,
				icon: 'ts-icon-arrowright',
				onClick: () => {
					window.history.forward();
				}
			}
		] as NavigationBtnConfig[]).map(v => {
			if (!v.btn) {
				return;
			}

			if (React.isValidElement(v.btn)) {
				return (
					<li className={className} key={v.key}>
						{v.btn}
					</li>
				);
			}

			const props =
				v.btn === true
					? {
							onClick: v.onClick
					  }
					: v.btn;

			return (
				<li className={className} key={v.key}>
					<button {...props}>
						<i className={v.icon}></i>
					</button>
				</li>
			);
		})
	);

	return navigationBtns;
}

export function Header(props: HeaderProps) {
	const genItemClassName = (className?: string) => {
		return cx(`${prefixCls}-item`, { [prefixCls + '-item-' + className]: !!className });
	};
	const navigationBtns = genNavigationBtns(
		genItemClassName('navigation'),
		props.backButton,
		props.forwardButton
	);

	return (
		<header className={cx(prefixCls, `${prefixCls}--${props.theme}`, props.className)}>
			<menu className={`${prefixCls}-main`}>
				{!!navigationBtns.length && navigationBtns}
				{!!props.icon && (
					<li className={genItemClassName('icon')}>
						<img src={props.icon} alt="icon" className={`${prefixCls}-icon`} />
					</li>
				)}
				{!!props.title && (
					<li className={genItemClassName('title')}>
						{React.isValidElement(props.title) ? props.title : <h1>{props.title}</h1>}
					</li>
				)}
				{Array.isArray(props.buttons) &&
					React.Children.map(
						props.buttons.slice().reverse(),
						btn => !_.isNil(btn) && <li className={genItemClassName('button')}>{btn}</li>
					)}
			</menu>
			{!!props.tabs && <section className={`${prefixCls}-tabs`}>{props.tabs}</section>}
			{!!props.search && <section className={`${prefixCls}-search`}>{props.search}</section>}
		</header>
	);
}

Header.propTypes = {
	title: PropTypes.node,
	icon: PropTypes.string,
	theme: PropTypes.oneOf(['blue', 'white']),
	tabs: PropTypes.node,
	search: PropTypes.node,
	/** if set to `true`, this will call `window.history.back()` */
	backButton: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.node]),
	/** if set to `true`, this will call `window.history.forward()` */
	forwardButton: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.node]),
	buttons: PropTypes.arrayOf(PropTypes.node),
	className: PropTypes.string
};

Header.defaultProps = {
	theme: 'white'
};

export default Header;
