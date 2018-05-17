import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.scss';

class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    block: PropTypes.bool,
    color: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'error']),
    disabled: PropTypes.bool,
    height: PropTypes.oneOf(['short', 'default', 'tiny']),
    hollow: PropTypes.bool,
    onClick: PropTypes.func,
    width: PropTypes.oneOf(['thin', 'default', 'wide']),
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    color: 'default',
    tag: 'button',
  };

  onClick = (event) => {
    if (this.props.disabled) {
      event.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render() {
    const { block, color, height, hollow, width, className, tag, ...rest } = this.props;

    let Tag = tag;

    if (rest.href) {
      Tag = 'a';
    }

    const classes = classNames(
      className,
      'button',
      `button--${hollow ? `hollow-${color}` : color}`,
      {
        'button--block': block,
        [`button--${height}`]: !!height,
        [`button--${width}`]: !!width,
      },
    );

    return <Tag {...rest} className={classes} onClick={this.onClick} />;
  }
}

export default Button;
