import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../src/components/Input';
import './styles.scss';

storiesOf('Input', module)
  .add('default', () => <Input placeholder="Default Input" />)
  .add('valid', () => <Input placeholder="Valid Input" valid />)
  .add('invalid', () => <Input placeholder="Invalid Input" valid={false} />)
  .add('readonly', () => <Input placeholder="Read Only Input" readOnly />)
  .add('disabled', () => <Input placeholder="Disabled Input" disabled />);
