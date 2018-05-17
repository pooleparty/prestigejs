import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ItemListItem from './ItemListItem';

import './ItemList.scss';

class ItemList extends Component {
  static displayName = 'ItemList';

  static Item = ItemListItem;

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'ul',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'item-list');

    return <Tag {...rest} className={classes} />;
  }
}
export default ItemList;
