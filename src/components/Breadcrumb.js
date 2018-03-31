import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BreadcrumbItem from './BreadcrumbItem';

import './Breadcrumb.scss';

function Breadcrumb(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'breadcrumb');

  return <Tag {...rest} className={classes} />;
}

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Breadcrumb.defaultProps = {
  tag: 'ol',
};

Breadcrumb.displayName = 'Breadcrumb';

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
