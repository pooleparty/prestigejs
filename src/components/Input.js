import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.scss';

class Input extends Component {
  static displayName = 'Input';

  static propTypes = {
    valid: PropTypes.bool,
    className: PropTypes.string,
  };

  render() {
    const { valid, className, ...rest } = this.props;

    const classes = classNames(className, 'input', {
      'input--valid': valid === true,
      'input--invalid': valid === false,
    });

    return <input type="text" {...rest} className={classes} />;
  }
}

export default Input;
