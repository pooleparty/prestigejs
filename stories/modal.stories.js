import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../src/components/Modal';
import ButtonToolbar from '../src/components/ButtonToolbar';
import Button from '../src/components/Button';
import './styles.scss';

const onHide = () => {
  console.log('onHide');
};

storiesOf('Modal', module)
  .add('default', () => (
    <Modal show onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.Header>
      <Modal.Body>Hello World</Modal.Body>
      <Modal.Footer>
        <ButtonToolbar>
          <Button height="tiny">Cancel</Button>
          <Button height="tiny" color="primary">
            Save Changes
          </Button>
        </ButtonToolbar>
      </Modal.Footer>
    </Modal>
  ))
  .add('no backdrop', () => (
    <Modal show backdrop={false} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Header</Modal.Title>
      </Modal.Header>
      <Modal.Body>Hello World</Modal.Body>
      <Modal.Footer>
        <ButtonToolbar>
          <Button height="tiny">Cancel</Button>
          <Button height="tiny" color="primary">
            Save Changes
          </Button>
        </ButtonToolbar>
      </Modal.Footer>
    </Modal>
  ));
