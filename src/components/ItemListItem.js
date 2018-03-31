import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ItemListItem.scss';

function ItemListItem(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'item-list-item');

  return <Tag {...rest} className={classes} />;
}

ItemListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ItemListItem.defaultProps = {
  tag: 'li',
};

ItemListItem.displayName = 'ItemList.Item';

export default ItemListItem;
