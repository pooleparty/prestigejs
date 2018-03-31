import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FeatureIcon.scss';

function FeatureIcon(props) {
  const { wrap, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'feature__icon', { 'feature__icon--circle': wrap });

  return <Tag {...rest} className={classes} />;
}

FeatureIcon.propTypes = {
  wrap: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FeatureIcon.defaultProps = {
  tag: 'div',
};

FeatureIcon.displayName = 'Feature.Icon';

export default FeatureIcon;
