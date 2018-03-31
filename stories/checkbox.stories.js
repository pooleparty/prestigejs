import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '../src/components/Checkbox';
import './styles.scss';

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox>Default Checkbox</Checkbox>)
  .add('defaultChecked', () => <Checkbox defaultChecked>Default Checked Checkbox</Checkbox>)
  .add('checked', () => <Checkbox checked>Checked Checkbox</Checkbox>)
  .add('disabled', () => <Checkbox disabled>Disabled Checkbox</Checkbox>)
  .add('disabled checked', () => (
    <Checkbox disabled checked>
      Disabled Checked Checkbox
    </Checkbox>
  ));
