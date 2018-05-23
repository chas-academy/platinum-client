import React, { Component } from 'react';
import { BarChart, Cell, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class BarChartResult extends Component {
  render() {
    const data = [];
    const labels = [];
    const colors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff', '#aa6e28', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000080', '#808080', '#000000'];

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
