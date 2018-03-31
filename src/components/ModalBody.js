import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ModalBody.scss';

const ModalBody = ({ tag: Tag, className, ...rest }) => {
  const classes = classNames(['modal__body', className]);

  return <Tag {...rest} className={classes} />;
};

ModalBody.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ModalBody.defaultProps = {
  tag: 'div',
};

ModalBody.displayName = 'Modal.Body';

export default ModalBody;
