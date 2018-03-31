import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './FeatureDescription.scss';

function FeatureDescription(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classnames(className, 'feature__description');

  return <Tag {...rest} className={classes} />;
}

FeatureDescription.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

FeatureDescription.defaultProps = {
  tag: 'div',
};

FeatureDescription.displayName = 'Feature.Description';

export default FeatureDescription;
