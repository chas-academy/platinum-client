import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

/* eslint-disable react/prefer-stateless-function, react/prop-types, prefer-destructuring */

export default class Default extends Component {
  render() {
    const props = this.props;

    if (!props.enableModal) return null;

    const { title, component } = props.formOption;
    const ModalContent = component;

    return (
      <Modal show={props.showModal} onHide={props.toggleModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <ModalContent {...props} isModal />
      </Modal>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/prop-types, prefer-destructuring */
