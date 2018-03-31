import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import './Modal.scss';

class Modal extends Component {
  static displayName = 'Modal';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    keyboard: PropTypes.bool,
    show: PropTypes.bool,
    onHide: PropTypes.func,
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  static defaultProps = {
    className: '',
    onHide: () => {},
    keyboard: true,
    show: false,
    backdrop: true,
  };

  static childContextTypes = {
    $ps_modal: PropTypes.shape({
      onHide: PropTypes.func,
    }),
  };

  getChildContext() {
    return {
      $ps_modal: {
        onHide: this.props.onHide,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.listenForEsc, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.listenForEsc, true);
  }

  listenForEsc(event) {
    if (this.props.keyboard && (event.key === 'Escape' || event.keyCode === 27)) {
      this.props.onHide();
    }
  }

  render() {
    const { className, show, keyboard, backdrop, onHide, ...rest } = this.props;

    if (!show) {
      return null;
    }

    const classes = classNames('modal', className);

    return (
      <div>
        <div {...rest} tabIndex="-1" className={classes}>
          {this.props.children}
        </div>
        {backdrop && <div className="modal__backdrop" />}
      </div>
    );
  }
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
