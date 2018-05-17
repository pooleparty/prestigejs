import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CardLabel.scss';

class CardLabel extends Component {
  static displayName = 'Card.Label';

  static propTypes = {
    position: PropTypes.oneOf(['left', 'right', 'justify']),
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { position, className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'card__label', {
      [`card__label--${position}`]: !!position,
    });

    return <Tag {...rest} className={classes} />;
  }
}

export default CardLabel;
