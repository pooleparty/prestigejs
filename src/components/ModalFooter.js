import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ModalFooter.scss';

const ModalFooter = ({ tag: Tag, className, ...rest }) => {
  const classes = classNames(['modal__footer', className]);

  return <Tag {...rest} className={classNames(className, classes)} />;
};

ModalFooter.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ModalFooter.defaultProps = {
  tag: 'div',
};

ModalFooter.displayName = 'Modal.Footer';

export default ModalFooter;
