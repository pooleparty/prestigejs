import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ItemListItem from './ItemListItem';

import './ItemList.scss';

function ItemList(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'item-list');

  return <Tag {...rest} className={classes} />;
}

ItemList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ItemList.defaultProps = {
  tag: 'ul',
};

ItemList.displayName = 'ItemList';

ItemList.Item = ItemListItem;

export default ItemList;
