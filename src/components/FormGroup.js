import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FormGroup.scss';

function FormGroup(props) {
  const { vertical, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'form-group', { 'form-group--vertical': vertical });

  return <Tag {...rest} className={classes} />;
}

FormGroup.propTypes = {
  vertical: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormGroup.defaultProps = {
  tag: 'div',
};

FormGroup.displayName = 'FormGroup';

export default FormGroup;
