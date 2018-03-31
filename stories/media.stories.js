import React from 'react';
import { storiesOf } from '@storybook/react';
import Media from '../src/components/Media';
import './styles.scss';

const placeholder = (w, h, text = 'Placeholder') => (
  <img
    alt="Placeholder"
    src={`https://placeholdit.imgix.net/~text?txtsize=33&txt=${text}&w=${w}&h=${h}`}
  />
);

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
  ' Donec et eros id sem dignissim bibendum. Cras nec mauris augue. Mauris a' +
  ' volutpat ipsum, eget feugiat mi. Nunc felis nisi, facilisis vel pellentesque' +
  ' auctor, volutpat in nulla.';

storiesOf('Media', module)
  .add('default', () => (
    <Media media={placeholder(600, 400)}>
      <div>{lorem}</div>
    </Media>
  ))
  .add('reverse', () => (
    <Media media={placeholder(600, 400)} reverse>
      <div>{lorem}</div>
    </Media>
  ))
  .add('wide image', () => (
    <Media media={placeholder(600, 400, 'Wide')} imageSize="wide">
      <div>{lorem}</div>
    </Media>
  ))
  .add('narrow image', () => (
    <Media media={placeholder(600, 400, 'Narrow')} imageSize="narrow">
      <div>{lorem}</div>
    </Media>
  ));
