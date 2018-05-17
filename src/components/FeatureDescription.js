import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './FeatureDescription.scss';

class FeatureDescription extends Component {
  static displayName = 'Feature.Description';

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

    const classes = classnames(className, 'feature__description');

    return <Tag {...rest} className={classes} />;
  }
}

export default FeatureDescription;
