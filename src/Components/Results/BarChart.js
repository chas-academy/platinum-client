import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class BarChartResult extends Component {
  render() {
    const data = [
      {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
      },
      {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
      },
      {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
      },
    ];
    return (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="pv" barSize={40} fill="#000" />
      </BarChart>
    );
  }
}

/* eslint-enable react/prop-types */
