import React, { Component } from 'react';
import ViewModal from '../../Modals/Default';

/* eslint-disable prefer-destructuring, no-unused-vars */

export default class ViewRecord extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false };

    this.handleToggleViewModal = this.handleToggleViewModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleToggleViewModal(resourceId = null) {
    this.setState({ showModal: !this.state.showModal });
  }

  handleOpenModal(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  render() {
    const props = this.props;

    if (!props.showViewRecord) return null;

    const resourceId = props.resource[props.resourceIdKey];

    return (
      <span>
        <ViewModal
          formOption={props.viewRecordOption}
          resource={props.resource}
          enableModal={props.showViewRecord}
          showModal={this.state.showModal}
          toggleModalHandler={this.handleToggleViewModal}
        />
        <a
          href={[props.path, resourceId].join('/')}
          className="datatable-actions-btn"
          onClick={this.handleOpenModal}
        >
          View
        </a>
      </span>
    );
  }
}

/* eslint-enable prefer-destructuring, no-unused-vars */
