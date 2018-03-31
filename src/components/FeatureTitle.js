import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FeatureTitle.scss';

function FeatureTitle(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'feature__title');

  return <Tag {...rest} className={classes} />;
}

FeatureTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FeatureTitle.defaultProps = {
  tag: 'div',
};

FeatureTitle.displayName = 'Feature.Title';

export default FeatureTitle;
