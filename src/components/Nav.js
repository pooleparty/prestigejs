import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavItem from './NavItem';
import NavLink from './NavLink';

import './Nav.scss';

class Nav extends Component {
  static displayName = 'Nav';

  static Item = NavItem;
  static Link = NavLink;

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'ul',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'nav');

    return <Tag {...rest} className={classes} />;
  }
}

export default Nav;
