import React from 'react';
import { storiesOf } from '@storybook/react';
import Palette from './components/Palette';
import './styles.scss';

const palettes = [
  {
    name: 'Blue',
    baseColor: '#057cfb',
  },
  {
    name: 'Green',
    baseColor: '#30b545',
  },
  {
    name: 'Yellow',
    baseColor: '#fcbc54',
  },
  {
    name: 'Orange',
    baseColor: '#e8702a',
  },
  {
    name: 'Red',
    baseColor: '#fa450d',
  },
  {
    name: 'Mid Grey',
    baseColor: '#676775',
  },
  {
    name: 'Dark Grey',
    baseColor: '#393745',
  },
  {
    name: 'Light Grey',
    baseColor: '#d9d9d9',
    inverted: false,
  },
  {
    name: 'White',
    baseColor: '#ffffff',
    inverted: false,
  },
];

storiesOf('Colors', module).add('palettes', () =>
  palettes.map(palette => <Palette {...palette} key={palette.name} />),
);
