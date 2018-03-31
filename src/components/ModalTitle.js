import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ModalTitle.scss';

const ModalTitle = ({ tag: Tag, className, ...rest }) => {
  const classes = classNames(['modal__title', className]);

  return <Tag {...rest} className={classes} />;
};

ModalTitle.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ModalTitle.defaultProps = {
  tag: 'h4',
};

ModalTitle.displayName = 'Modal.Title';

export default ModalTitle;
