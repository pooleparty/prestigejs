import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from '../src/components/Textarea';
import './styles.scss';

storiesOf('Textarea', module)
  .add('default', () => <Textarea placeholder="Default Textarea" />)
  .add('valid', () => <Textarea placeholder="Valid Textarea" valid />)
  .add('invalid', () => <Textarea placeholder="Invalid Textarea" valid={false} />)
  .add('readonly', () => <Textarea placeholder="Read Only Textarea" readOnly />)
  .add('disabled', () => <Textarea placeholder="Disabled Textarea" disabled />);
