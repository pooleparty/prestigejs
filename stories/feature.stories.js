import React from 'react';
import { storiesOf } from '@storybook/react';
import Feature from '../src/components/Feature';
import Icon from '../src/components/Icon';
import './styles.scss';

const FeatureGridFeature = () => (
  <Feature>
    <Feature.Icon>
      <Icon name="dot-circle" />
    </Feature.Icon>
    <Feature.Title>The Feature Title</Feature.Title>
    <Feature.Description>
      This is the description that goes with the feature. Learn all about it!
    </Feature.Description>
  </Feature>
);

const InlineFeatureGridFeature = () => (
  <Feature inline>
    <Feature.Icon>
      <Icon name="dot-circle" />
    </Feature.Icon>
    <Feature.Title>The Feature Title</Feature.Title>
  </Feature>
);

storiesOf('Feature', module)
  .add('title only', () => (
    <Feature>
      <Feature.Icon>
        <Icon name="dot-circle" />
      </Feature.Icon>
      <Feature.Title>The Feature Title</Feature.Title>
    </Feature>
  ))
  .add('description only', () => (
    <Feature>
      <Feature.Icon>
        <Icon name="dot-circle" />
      </Feature.Icon>
      <Feature.Description>
        This is the description that goes with the feature. Learn all about it!
      </Feature.Description>
    </Feature>
  ))
  .add('title and description', () => (
    <Feature>
      <Feature.Icon>
        <Icon name="dot-circle" />
      </Feature.Icon>
      <Feature.Title>The Feature Title</Feature.Title>
      <Feature.Description>
        This is the description that goes with the feature. Learn all about it!
      </Feature.Description>
    </Feature>
  ))
  .add('inline', () => (
    <Feature inline>
      <Feature.Icon>
        <Icon name="dot-circle" />
      </Feature.Icon>
      <Feature.Title>Inline Feature Title</Feature.Title>
    </Feature>
  ))
  .add('feature grid', () => (
    <div className="feature-grid">
      <FeatureGridFeature />
      <FeatureGridFeature />
      <FeatureGridFeature />
      <FeatureGridFeature />
      <FeatureGridFeature />
      <FeatureGridFeature />
    </div>
  ))
  .add('inline feature grid', () => (
    <div className="feature-grid">
      <InlineFeatureGridFeature />
      <InlineFeatureGridFeature />
      <InlineFeatureGridFeature />
      <InlineFeatureGridFeature />
      <InlineFeatureGridFeature />
      <InlineFeatureGridFeature />
    </div>
  ));
