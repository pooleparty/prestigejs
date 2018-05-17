import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemList from '../src/components/ItemList';
import Icon from '../src/components/Icon';
import './styles.scss';

storiesOf('ItemList', module).add('itemList', () => (
  <ItemList>
    <ItemList.Item>
      <Icon name="circle-outline" />Item 1
    </ItemList.Item>
    <ItemList.Item>
      <Icon name="circle-outline" />Item 2
    </ItemList.Item>
    <ItemList.Item>
      <Icon name="circle-outline" />Item 3
    </ItemList.Item>
    <ItemList.Item>
      <Icon name="circle-outline" />Item 4
    </ItemList.Item>
  </ItemList>
));
