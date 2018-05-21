import React from 'react';
import classNames from 'classnames';
import { storiesOf } from '@storybook/react';
import './styles.scss';
import './marginPadding.scss';

const allSizes = [0, 10, 20, 30, 40, 50];
const allDimensions = [
  {
    key: 't',
    name: 'Top',
  },
  {
    key: 'r',
    name: 'Right',
  },
  {
    key: 'b',
    name: 'Bottom',
  },
  {
    key: 'l',
    name: 'Left',
  },
  {
    key: 'a',
    name: 'All',
    description: 'Top, bottom, left, and right',
  },
  {
    key: 'h',
    name: 'Horizontal',
    description: 'Left and right',
  },
  {
    key: 'v',
    name: 'Vertical',
    description: 'Top and bottom',
  },
];

function createExample(sizes, dimensionKey, type) {
  return (
    <div key={`demo-${type}-${dimensionKey}`}>
      {sizes.map(size => (
        <div
          key={size}
          className={classNames('size', `u-p${dimensionKey}-${size}`, {
            'size--padding': type === 'p',
            'size--margin': type === 'm',
          })}
        >
          <div className="size__content">
            <code>{`u-${type}${dimensionKey}-${size}`}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

const paddingStory = storiesOf('Padding', module);

allDimensions.forEach(({ key, name }) => {
  paddingStory.add(name, () => createExample(allSizes, key, 'p'));
});

const marginStory = storiesOf('Margin', module);

allDimensions.forEach(({ key, name }) => {
  marginStory.add(name, () => createExample(allSizes, key, 'm'));
});
