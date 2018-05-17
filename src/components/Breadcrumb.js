import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BreadcrumbItem from './BreadcrumbItem';

import './Breadcrumb.scss';

class Breadcrumb extends Component {
  static displayName = 'Breadcrumb';

  static Item = BreadcrumbItem;

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'ol',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'breadcrumb');

    return <Tag {...rest} className={classes} />;
  }
}

export default Breadcrumb;
