import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from '../src/components/Breadcrumb';
import './styles.scss';

storiesOf('Breadcrumb', module).add('breadcrumb', () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <a>Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a>Page 1</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Page 2</Breadcrumb.Item>
  </Breadcrumb>
));
