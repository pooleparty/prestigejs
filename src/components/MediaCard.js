import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from './Card';

import './MediaCard.scss';

class MediaCard extends Component {
  static displayName = 'MediaCard';

  static propTypes = {
    content: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageClassName: PropTypes.string,
    number: PropTypes.number,
  };

  render() {
    const { content, imagePath, imageAlt, imageClassName, number, ...rest } = this.props;

    const numberElm = number ? <Card.Number>{number}</Card.Number> : null;
    const imgClasses = classNames('media-card__image', imageClassName);

    return (
      <Card {...rest} rounder label={numberElm}>
        <div className="media-card">
          <img src={imagePath} className={imgClasses} alt={imageAlt} />
          <div className="media-card__content">{content}</div>
        </div>
      </Card>
    );
  }
}

export default MediaCard;
