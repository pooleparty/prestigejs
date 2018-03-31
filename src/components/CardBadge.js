import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CardBadge.scss';

function CardBadge(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'card__badge');

  return <Tag {...rest} className={classes} />;
}

CardBadge.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardBadge.defaultProps = {
  tag: 'div',
};

CardBadge.displayName = 'Card.Badge';

export default CardBadge;
