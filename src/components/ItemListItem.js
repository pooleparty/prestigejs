import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ItemListItem.scss';

class ItemListItem extends Component {
  static displayName = 'ItemList.Item';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'li',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'item-list-item');

    return <Tag {...rest} className={classes} />;
  }
}

export default ItemListItem;
