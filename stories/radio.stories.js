import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../src/components/Radio';
import FormGroup from '../src/components/FormGroup';
import './styles.scss';

storiesOf('Radio', module)
  .add('default', () => <Radio>Default Radio</Radio>)
  .add('defaultChecked', () => <Radio defaultChecked>Default Checked Radio</Radio>)
  .add('checked', () => <Radio checked>Checked Radio</Radio>)
  .add('disabled', () => <Radio disabled>Disabled Radio</Radio>)
  .add('disabled checked', () => (
    <Radio disabled checked>
      Disabled Checked Radio
    </Radio>
  ))
  .add('all', () => (
    <FormGroup vertical>
      <Radio name="radio-example-a">Yes</Radio>
      <Radio name="radio-example-a">Absolutely</Radio>
      <Radio name="radio-example-a" defaultChecked>
        Positively
      </Radio>
      <Radio name="radio-example-b" disabled>
        Disabled
      </Radio>
      <Radio name="radio-example-b" disabled checked>
        Disabled &amp; Checked
      </Radio>
    </FormGroup>
  ));
