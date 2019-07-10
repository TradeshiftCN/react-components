import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.less';

class Header extends React.Component {
  render() {
    const { className, children, icon, title, ...other } = this.props;
    return (
      <header className={cx(`${prefixCls}-header`, className)} {...other}>
        <ul className={`${prefixCls}-header__bars`}>
          <li className={`${prefixCls}-header__bars-tool`}>
            <menu className={`${prefixCls}-header__bars-tool-item`}>
              <li className={`${prefixCls}-header__bars-tool-item-icon`}>
                <img src={icon} alt="icon" width={40} height={40} />
              </li>
              <li className={`${prefixCls}-header__bars-tool-item-title`}>
                <label>{title}</label>
              </li>
            </menu>
          </li>
          {children && <li>{children}</li>}
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,

  children: PropTypes.node,

  // Header 左侧的 icon
  icon: PropTypes.string,

  // Header 标题
  title: PropTypes.string
};

export default Header;
