import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
import Option from './Option';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class Question extends Component {
  render() {
    const options = [];

    this.props.question.options.forEach((option) => {
      const newOption = <Option key={uuidv4()} option={option} />;

      options.push(newOption);
    });
    return (
      <div>
        <h3> {this.props.question.name} </h3>
        <Table celled>
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
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
