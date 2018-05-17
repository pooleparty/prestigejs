import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ModalBody.scss';

class ModalBody extends Component {
  static displayName = 'Modal.Body';

  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { tag: Tag, className, ...rest } = this.props;

    const classes = classNames(['modal__body', className]);

    return <Tag {...rest} className={classes} />;
  }
}

export default ModalBody;
