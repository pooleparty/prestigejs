import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CloseButton from './CloseButton';
import './ModalHeader.scss';

const ModalHeader = (props, context) => {
  const { closeLabel, closeButton, onHide, className, children, ...rest } = props;

  const modal = context.$ps_modal;

  const classes = classNames('modal__header', className);

  const onClick = () => {
    if (modal && modal.onHide) {
      return modal.onHide.apply();
    }
    return onHide.apply();
  };

  return (
    <div {...rest} className={classes}>
      {closeButton && <CloseButton label={closeLabel} onClick={onClick} />}
      {children}
    </div>
  );
};

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  closeLabel: PropTypes.string,
  closeButton: PropTypes.bool,
  onHide: PropTypes.func,
};

ModalHeader.defaultProps = {
  closeLabel: 'Close',
  closeButton: false,
};

ModalHeader.contextTypes = {
  $ps_modal: PropTypes.shape({
    onHide: PropTypes.func,
  }),
};

ModalHeader.displayName = 'Modal.Header';

export default ModalHeader;
