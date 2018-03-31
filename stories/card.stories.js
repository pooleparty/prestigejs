import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/components/Card';
import './styles.scss';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('rounder', () => (
    <Card rounder>
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('dark', () => (
    <Card dark>
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('selected', () => (
    <Card selected>
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with label', () => (
    <Card label={<Card.Badge>Label</Card.Badge>}>
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with left label', () => (
    <Card label={<Card.Badge>Label</Card.Badge>} labelPosition="left">
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with right label', () => (
    <Card label={<Card.Badge>Label</Card.Badge>} labelPosition="right">
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with justify label', () => (
    <Card label={<Card.Badge>Label</Card.Badge>} labelPosition="justify">
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with number', () => (
    <Card label={<Card.Number>5</Card.Number>}>
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with left number', () => (
    <Card label={<Card.Number>5</Card.Number>} labelPosition="left">
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ))
  .add('with right number', () => (
    <Card label={<Card.Number>5</Card.Number>} labelPosition="right">
      <div className="u-pa-20">{lorem}</div>
    </Card>
  ));
