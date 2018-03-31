import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardBadge from './CardBadge';
import CardLabel from './CardLabel';
import CardNumber from './CardNumber';

import './Card.scss';

function Card(props) {
  const {
    dark,
    label,
    labelPosition,
    rounder,
    selected,
    children,
    className,
    tag: Tag,
    ...rest
  } = props;

  const classes = classNames(className, 'card', {
    'card--dark': dark,
    'card--labeled': !!label,
    'card--rounder': rounder,
    'card--selected': selected,
  });

  return (
    <Tag {...rest} className={classes}>
      {label && <CardLabel position={labelPosition}>{label}</CardLabel>}
      {children}
    </Tag>
  );
}

Card.propTypes = {
  dark: PropTypes.bool,
  label: PropTypes.node,
  labelPosition: CardLabel.propTypes.position,
  rounder: PropTypes.bool,
  selected: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Card.defaultProps = {
  tag: 'div',
};

Card.displayName = 'Card';

Card.Badge = CardBadge;
Card.Number = CardNumber;

export default Card;
