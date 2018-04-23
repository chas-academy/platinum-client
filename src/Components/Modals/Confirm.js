/* eslint-disable react/prefer-stateless-function, react/prop-types,
prefer-destructuring, import/no-extraneous-dependencies, react/sort-comp */

import React, { Component } from 'react';
import _ from 'lodash';
import { Modal, Button } from 'react-bootstrap';

export default class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onHide: props.closeModalHandler,
      backdrop: true,
      title: props.title || 'Confirm Dialog',
      button: {
        title: (props.button && props.button.title) || 'Confirm',
        style: (props.button && props.button.style) || 'primary',
        disabled: false,
      },
    };
    this.handleConfirmRequest = this.handleConfirmRequest.bind(this);
  }

  toggleButton(state) {
    this.setState({
      onHide: state ? null : this.props.closeModalHandler,
      backdrop: state ? 'static' : true,
      button: _.merge(this.state.button, { disabled: state }),
    });
  }

  handleConfirmRequest() {
    this.toggleButton(true);
    this.props.processRequestHandler();
  }

  componentWillReceiveProps() {
    this.toggleButton(this.props.requestInProcess);
  }

  render() {
    const props = this.props;
    const state = this.state;
    const button = state.button;

    return (
      <Modal
        className="-confirm"
        show={props.showModal}
        onHide={state.onHide}
        backdrop={state.backdrop}
      >
        <Modal.Header>
          <Modal.Title>{state.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{props.children}</Modal.Body>

        <Modal.Footer>
          {props.showCloseButton ? (
            <Button onClick={props.closeModalHandler}>Close</Button>
          ) : (
            <div>
              <Button
                onClick={props.closeModalHandler}
                disabled={button.disabled}
              >
                Cancel
              </Button>
              <Button
                bsStyle={button.style}
                onClick={this.handleConfirmRequest}
                disabled={button.disabled}
              >
                {button.title}
              </Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
