import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FeatureIcon from './FeatureIcon';
import FeatureTitle from './FeatureTitle';
import FeatureDescription from './FeatureDescription';

import './Feature.scss';

class Feature extends Component {
  static displayName = 'Feature';

  static Icon = FeatureIcon;
  static Title = FeatureTitle;
  static Description = FeatureDescription;

  static propTypes = {
    inline: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { inline, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'feature', { 'feature--inline': inline });

    return <Tag {...rest} className={classes} />;
  }
}

export default Feature;
