import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FeatureTitle.scss';

class FeatureTitle extends Component {
  static displayName = 'Feature.Title';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'feature__title');

    return <Tag {...rest} className={classes} />;
  }
}

export default FeatureTitle;
