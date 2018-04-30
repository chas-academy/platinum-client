import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class Option extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.option.name}</Table.Cell>
        <Table.Cell>{this.props.option.votes.length}</Table.Cell>
      </Table.Row>
    );
  }
}
