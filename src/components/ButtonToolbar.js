import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonToolbar.scss';

class ButtonToolbar extends Component {
  static displayName = 'ButtonToolbar';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'button-toolbar');

    return <Tag {...rest} className={classes} />;
  }
}

export default ButtonToolbar;
