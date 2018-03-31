import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../src/components/Select';
import './styles.scss';

const options = [
  { label: 'Bulbasaur', value: 'bulbasaur' },
  { label: 'Charmander', value: 'charmander' },
  { label: 'Squirtle', value: 'squirtle' },
];

storiesOf('Select', module)
  .add('default', () => <Select placeholder="Default Select" options={options} />)
  .add('valid', () => <Select placeholder="Valid Select" options={options} valid />)
  .add('invalid', () => <Select placeholder="Invalid Select" options={options} valid={false} />)
  .add('disabled', () => <Select placeholder="Disabled Select" disabled />);
