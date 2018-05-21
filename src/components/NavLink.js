import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './NavLink.scss';

class NavLink extends Component {
  static displayName = 'Nav.Link';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'a',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'nav-link');

    return <Tag {...rest} className={classes} />;
  }
}

export default NavLink;
