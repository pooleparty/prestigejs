import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Textarea(props) {
  const { valid, className, ...rest } = props;

  const classes = classNames(className, 'input', {
    'input--valid': valid === true,
    'input--invalid': valid === false,
  });

  return <textarea {...rest} className={classes} />;
}

Textarea.propTypes = {
  valid: PropTypes.bool,
  className: PropTypes.string,
};

Textarea.displayName = 'Textarea';

export default Textarea;
