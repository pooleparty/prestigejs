import React from 'react';
import { storiesOf } from '@storybook/react';
import Accordion from '../src/components/Accordion';
import './styles.scss';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
  ' Donec et eros id sem dignissim bibendum. Cras nec mauris augue. Mauris a' +
  ' volutpat ipsum, eget feugiat mi. Nunc felis nisi, facilisis vel pellentesque' +
  ' auctor, volutpat in nulla.';

storiesOf('Accordion', module)
  .add('accordion', () => (
    <Accordion>
      <Accordion.Tab header="Tab 1">{lorem}</Accordion.Tab>
      <Accordion.Tab header="Tab 2">{lorem}</Accordion.Tab>
    </Accordion>
  ))
  .add('multiple', () => (
    <Accordion multiple>
      <Accordion.Tab header="Tab 1">{lorem}</Accordion.Tab>
      <Accordion.Tab header="Tab 2">{lorem}</Accordion.Tab>
    </Accordion>
  ))
  .add('default active', () => (
    <Accordion activeId="tab1">
      <Accordion.Tab id="tab1" header="Tab 1">
        {lorem}
      </Accordion.Tab>
      <Accordion.Tab id="tab2" header="Tab 2">
        {lorem}
      </Accordion.Tab>
    </Accordion>
  ))
  .add('disabled', () => (
    <Accordion>
      <Accordion.Tab header="Tab Disabled" disabled>
        {lorem}
      </Accordion.Tab>
    </Accordion>
  ));
