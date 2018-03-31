import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './CardNumber.scss';

function CardNumber(props) {
  const { className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'card__number');

  return <Tag {...rest} className={classes} />;
}

CardNumber.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardNumber.defaultProps = {
  tag: 'div',
};

CardNumber.displayName = 'Card.Number';

export default CardNumber;
