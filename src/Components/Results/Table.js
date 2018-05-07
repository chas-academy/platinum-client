import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
import TableRow from './TableRow';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class QuestionTable extends Component {
  render() {
    const options = [];

    this.props.question.options.forEach((option) => {
      const newOption = <TableRow key={uuidv4()} option={option} />;

      options.push(newOption);
    });
    return (
      <Table unstackable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Options</Table.HeaderCell>
            <Table.HeaderCell>Votes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {options}
        </Table.Body>
      </Table>
    );
  }
}

/* eslint-enable react/prop-types */
