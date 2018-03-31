import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CardLabel.scss';

function CardLabel(props) {
  const { position, className, tag: Tag, ...rest } = props;

  const classes = classNames(className, 'card__label', {
    [`card__label--${position}`]: !!position,
  });

  return <Tag {...rest} className={classes} />;
}

CardLabel.propTypes = {
  position: PropTypes.oneOf(['left', 'right', 'justify']),
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

CardLabel.defaultProps = {
  tag: 'div',
};

CardLabel.displayName = 'Card.Label';

export default CardLabel;
