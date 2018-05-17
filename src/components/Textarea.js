import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Textarea extends Component {
  static displayName = 'Textarea';

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

    return <textarea {...rest} className={classes} />;
  }
}

export default Textarea;
