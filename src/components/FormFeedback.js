import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FormFeedback.scss';

class FormFeedback extends Component {
  static displayName = 'Form.Feedback';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'small',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'form-feedback');

    return <Tag {...rest} className={classes} />;
  }
}

export default FormFeedback;
