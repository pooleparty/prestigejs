import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ModalHeader.scss';

class ModalHeader extends Component {
  static displayName = 'Modal.Header';

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    closeLabel: PropTypes.string,
    closeButton: PropTypes.bool,
    onHide: PropTypes.func,
  };

  static defaultProps = {
    closeLabel: 'Close',
    closeButton: false,
  };

  static contextTypes = {
    $ps_modal: PropTypes.shape({
      onHide: PropTypes.func,
    }),
  };

  render() {
    const { closeLabel, closeButton, onHide, className, children, ...rest } = this.props;

    const modal = this.context.$ps_modal;

    const classes = classNames('modal__header', className);

    const onClick = () => {
      if (modal && modal.onHide) {
        return modal.onHide.apply();
      }
      return onHide.apply();
    };

    return (
      <div {...rest} className={classes}>
        {closeButton && (
          <button type="button" className="close" onClick={onClick}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">{closeLabel}</span>
          </button>
        )}
        {children}
      </div>
    );
  }
}

export default ModalHeader;
