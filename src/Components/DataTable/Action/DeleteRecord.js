import React, { Component } from 'react';
import axios from 'axios';
import Axios from '../../../Lib/Common/Axios';
import ConfirmModal from '../../Modals/Confirm';
import Alert from '../../Alert';
import * as Session from '../../../Lib/Helpers/Session';

/* eslint-disable prefer-destructuring , react/prop-types,
consistent-return, no-unused-vars, no-console */

export default class DeleteRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      deleteRequestInProcess: false,
      deleteRequestSuccess: false,
      deleteRequestError: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this);
  }

  handleDeleteRecord() {
    this.setState({
      showModal: true,
      deleteRequestSuccess: false,
      deleteRequestError: false,
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });

    if (this.state.deleteRequestSuccess && this.props.onSuccess) {
      setTimeout(() => {
        this.props.onSuccess();
      }, 300);
    }
  }

  handleDeleteRequest() {
    if (!Session.decodedToken()) return Session.verifyToken();

    this.setState({ deleteRequestInProcess: true });

    setTimeout(() => {
      this.setState({ deleteRequestError: false });
    });

    const props = this.props;
    const resourceId = props.resource[props.resourceIdKey];

    Axios.delete([props.dataSource, resourceId].join('/'))
      .then((response) => {
        this.setState({
          deleteRequestSuccess: true,
          deleteRequestInProcess: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return true;

        console.log('Error: ', error);

        this.setState({ deleteRequestInProcess: false });

        setTimeout(() => {
          this.setState({ deleteRequestError: true });
        });
      });
  }

  render() {
    const props = this.props;

    if (!props.showDeleteRecord || props.resource[props.resourceIdKey] === 1) return null;

    const state = this.state;
    const buttonClassName = props.isButton ? 'btn btn-danger' : 'datatable-actions-btn';
    const disabled = props.disabled ? props.disabled : false;
    const successMessage = props.successMessage ? props.successMessage : 'Record has been deleted.';

    return (
      <span>
        <ConfirmModal
          title={props.confirmModal.title}
          button={props.confirmModal.button}
          showModal={state.showModal}
          closeModalHandler={this.handleCloseModal}
          processRequestHandler={this.handleDeleteRequest}
          requestInProcess={state.deleteRequestInProcess}
          showCloseButton={state.deleteRequestSuccess}
        >
          {state.deleteRequestSuccess ? (
            <Alert type="success" hideDismissButton>
              {successMessage}
            </Alert>
          ) : (
            <ModalContent
              deleteRequestError={state.deleteRequestError}
              message={props.confirmModal.message}
            />
          )}
        </ConfirmModal>
        <button
          type="button"
          className={buttonClassName}
          onClick={this.handleDeleteRecord}
          disabled={disabled}
        >
          Delete
        </button>
      </span>
    );
  }
}

const ModalContent = props => (
  <div>
    {props.deleteRequestError && <Alert processError />}
    {props.message}
  </div>
);
