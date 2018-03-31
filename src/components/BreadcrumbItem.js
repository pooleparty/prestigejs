import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './BreadcrumbItem.scss';

const divider = (
  <svg
    className="breadcrumb-item__divider"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="14"
    height="14"
  >
    <path
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.626 7.251L44.375 32 19.626 56.749"
    />
  </svg>
);

function BreadcrumbItem(props) {
  const { children, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'breadcrumb-item');

  return (
    <Tag {...rest} className={classes}>
      {divider}
      {children}
    </Tag>
  );
}

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

BreadcrumbItem.defaultProps = {
  tag: 'li',
};

BreadcrumbItem.displayName = 'Breadcrumb.Item';

export default BreadcrumbItem;
