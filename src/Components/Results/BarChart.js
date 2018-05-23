import React, { Component } from 'react';
import { BarChart, Cell, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class BarChartResult extends Component {
  render() {
    const data = [];
    const labels = [];
    const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];

    this.props.options.forEach((element, index) => {
      const option = {
        name: element.name,
        votes: element.votes,
      };
      const color = {
        fill: colors[index],
      };
      const label = (
        <div className="bar__legend" key={uuidv4()}>
          <svg className="bar__legend-svg" width="10" height="10">
            <rect width="10" height="10" style={color} />
          </svg>
          <p>{element.name}</p>
        </div>
      );

      labels.push(label);
      data.push(option);
    });


    return (
      <div>
        <ResponsiveContainer height={400}>
          <BarChart width={800} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar data={data} type="monotone" dataKey="votes" barSize={40} fill="#000">
              {
            data.map((entry, index) => (
              <Cell key={uuidv4()} fill={colors[index % 20]} />
            ))
          }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="bar__legend-labels">
          {labels}
        </div>
      </div>
    );
  }
}
