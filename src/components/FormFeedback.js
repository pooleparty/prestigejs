import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FormFeedback.scss';

function FormFeedback(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'form-feedback');

  return <Tag {...rest} className={classes} />;
}

FormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FormFeedback.defaultProps = {
  tag: 'small',
};

FormFeedback.displayName = 'Form.Feedback';

export default FormFeedback;
