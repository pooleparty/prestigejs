import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FormGroup.scss';

class FormGroup extends Component {
  static displayName = 'FormGroup';

  static propTypes = {
    vertical: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { vertical, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'form-group', { 'form-group--vertical': vertical });

    return <Tag {...rest} className={classes} />;
  }
}

export default FormGroup;
