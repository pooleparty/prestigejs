import React from 'react';
import { storiesOf } from '@storybook/react';
import Section from '../src/components/Section';
import './styles.scss';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

storiesOf('Section', module)
  .add('small', () => <Section size="sm">{lorem}</Section>)
  .add('medium', () => <Section size="md">{lorem}</Section>)
  .add('large', () => <Section size="lg">{lorem}</Section>)
  .add('extra large', () => <Section size="xl">{lorem}</Section>);
