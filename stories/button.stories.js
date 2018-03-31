import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import ButtonToolbar from '../src/components/ButtonToolbar';
import './styles.scss';

storiesOf('Button', module)
  .add('default', () => <Button>Default</Button>)
  .add('primary', () => <Button color="primary">Primary</Button>)
  .add('success', () => <Button color="success">Success</Button>)
  .add('warning', () => <Button color="warning">Warning</Button>)
  .add('error', () => <Button color="error">Error</Button>)
  .add('width thin', () => <Button width="thin">Thin</Button>)
  .add('width wide', () => <Button width="wide">Wide</Button>)
  .add('height tiny', () => <Button height="tiny">Tiny</Button>)
  .add('height short', () => <Button height="short">Short</Button>)
  .add('hollow default', () => <Button hollow>Default</Button>)
  .add('hollow primary', () => (
    <Button color="primary" hollow>
      Primary
    </Button>
  ))
  .add('hollow success', () => (
    <Button color="success" hollow>
      Success
    </Button>
  ))
  .add('hollow warning', () => (
    <Button color="warning" hollow>
      Warning
    </Button>
  ))
  .add('hollow error', () => (
    <Button color="error" hollow>
      Error
    </Button>
  ));

storiesOf('ButtonToolbar', module).add('default', () => (
  <ButtonToolbar>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="success">Success</Button>
  </ButtonToolbar>
));
