import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Navbar.scss';

class Navbar extends Component {
  static displayName = 'Navbar';

  static propTypes = {
    color: PropTypes.oneOf(['dark', 'light']),
    sticky: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'nav',
  };

  render() {
    const { color, sticky, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'navbar', {
      [`navbar--${color}`]: !!color,
      'navbar--sticky': sticky,
    });

    return <Tag {...rest} className={classes} />;
  }
}

export default Navbar;
