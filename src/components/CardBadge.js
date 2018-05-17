import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CardBadge.scss';

class CardBadge extends Component {
  static displayName = 'Card.Badge';

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'card__badge');

    return <Tag {...rest} className={classes} />;
  }
}

export default CardBadge;
