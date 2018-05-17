import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ModalFooter.scss';

class ModalFooter extends Component {
  static displayName = 'Modal.Footer';

  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { tag: Tag, className, ...rest } = this.props;

    const classes = classNames(['modal__footer', className]);

    return <Tag {...rest} className={classNames(className, classes)} />;
  }
}

export default ModalFooter;
