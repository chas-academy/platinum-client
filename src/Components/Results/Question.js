import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import TableRow from './TableRow';
import QuestionTable from './Table';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class Question extends Component {
  render() {
    const options = [];

    this.props.question.options.forEach((option) => {
      const newOption = <TableRow key={uuidv4()} option={option} />;

      options.push(newOption);
    });
    return (
      <div className="min-width-100">
        <h3 className="margin-b-2"> {this.props.question.name} </h3>
        <QuestionTable />
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
