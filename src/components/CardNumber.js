import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './CardNumber.scss';

class CardNumber extends Component {
  static displayName = 'Card.Number';

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    tag: 'div',
  };

  render() {
    const { className, tag: Tag, ...rest } = this.props;

    const classes = classNames(className, 'card__number');

    return <Tag {...rest} className={classes} />;
  }
}

export default CardNumber;
