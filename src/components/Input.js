import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.scss';

function Input(props) {
  const { valid, className, ...rest } = props;

  const classes = classNames(className, 'input', {
    'input--valid': valid === true,
    'input--invalid': valid === false,
  });

  return <input type="text" {...rest} className={classes} />;
}

Input.propTypes = {
  valid: PropTypes.bool,
  className: PropTypes.string,
};

Input.displayName = 'Input';

export default Input;
