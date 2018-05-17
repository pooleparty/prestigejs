import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ModalTitle.scss';

class ModalTitle extends Component {
  static displayName = 'Modal.Title';

  static propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'h4',
  };

  render() {
    const { tag: Tag, className, ...rest } = this.props;

    const classes = classNames(['modal__title', className]);

    return <Tag {...rest} className={classes} />;
  }
}

export default ModalTitle;
