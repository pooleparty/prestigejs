import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FeatureIcon from './FeatureIcon';
import FeatureTitle from './FeatureTitle';
import FeatureDescription from './FeatureDescription';

import './Feature.scss';

function Feature(props) {
  const { inline, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'feature', { 'feature--inline': inline });

  return <Tag {...rest} className={classes} />;
}

Feature.propTypes = {
  inline: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Feature.defaultProps = {
  tag: 'div',
};

Feature.displayName = 'Feature';

Feature.Icon = FeatureIcon;
Feature.Title = FeatureTitle;
Feature.Description = FeatureDescription;

export default Feature;
