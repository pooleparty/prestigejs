import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaCard from '../src/components/MediaCard';
import './styles.scss';

const placeholder = (w, h, text = 'Placeholder') =>
  `https://placeholdit.imgix.net/~text?txtsize=33&txt=${text}&w=${w}&h=${h}`;

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
  ' Donec et eros id sem dignissim bibendum. Cras nec mauris augue.';

storiesOf('MediaCard', module)
  .add('default', () => (
    <MediaCard imagePath={placeholder(300, 300)} imageAlt="Placeholder" content={lorem} />
  ))
  .add('numbered', () => (
    <MediaCard
      imagePath={placeholder(300, 300)}
      imageAlt="Placeholder"
      content={lorem}
      number={1}
    />
  ))
  .add('media card grid', () => (
    <div className="media-card-grid">
      <MediaCard imagePath={placeholder(300, 300)} imageAlt="Placeholder" content={lorem} />
      <MediaCard imagePath={placeholder(300, 300)} imageAlt="Placeholder" content={lorem} />
      <MediaCard imagePath={placeholder(300, 300)} imageAlt="Placeholder" content={lorem} />
    </div>
  ));
