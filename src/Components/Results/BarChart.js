import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class BarChartResult extends Component {
  render() {
    const data = [];
    this.props.options.forEach((element) => {
      const option = {
        name: element.name,
        votes: element.votes,
      };
      data.push(option);
    });

    return (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="votes" barSize={40} fill="#000" />
      </BarChart>
    );
  }
}
