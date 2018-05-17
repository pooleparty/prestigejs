import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FeatureIcon.scss';

class FeatureIcon extends Component {
  static displayName = 'Feature.Icon';

  static propTypes = {
    wrap: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { wrap, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'feature__icon', { 'feature__icon--circle': wrap });

    return <Tag {...rest} className={classes} />;
  }
}

export default FeatureIcon;
