import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../src/components/Icon';
import manifest from '../src/svgson.json';
import './icon.scss';
import './styles.scss';

const iconStories = storiesOf('Icon', module);

iconStories.add('icons', () => (
  <div>
    <a
      id="author-credit"
      href="https://www.flaticon.com/packs/material-design"
      target="_blank"
      rel="noopener noreferrer"
    >
      Icons Source
    </a>
    <div className="icon__container">
      {Object.values(manifest).map(({ title }) => (
        <div className="icon__subcontainer" key={title}>
          <Icon name={title} size="md" />
          <div className="icon__title">{title}</div>
        </div>
      ))}
    </div>
  </div>
));
