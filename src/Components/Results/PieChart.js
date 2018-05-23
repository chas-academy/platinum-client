import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types, no-mixed-operators */
export default class PieChartResult extends Component {
  render() {
    const data = [];
    const labels = [];
    const colors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff', '#aa6e28', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000080', '#808080', '#000000'];
    let totalVotes = 0;
    this.props.options.forEach((element) => {
      totalVotes += element.votes;
    });

    this.props.options.forEach((element, index) => {
      const option = {
        name: element.name,
        value: element.votes,
      };

      const color = {
        fill: colors[index],
      };
      const lab = (
        <div className="bar__legend" key={uuidv4()}>
          <svg className="bar__legend-svg" width="10" height="10">
            <rect width="10" height="10" style={color} />
          </svg>
          <p className="bar__legend-name">{element.name}</p>
          <p className="bar__legend-percent">{totalVotes !== 0 ? `${((element.votes / totalVotes) * 100).toFixed(0)}%` : ''}</p>
        </div>
      );

      labels.push(lab);
      data.push(option);
    });

    return (
      <div>
        <ResponsiveContainer height={400}>
          <PieChart width={800} height={400} onMouseEnter={this.onPieEnter} >
            <Pie
              verticalAlign="middle"
              data={data}
              dataKey="value"
              outerRadius={80}
              fill="#8884d8"
            >
              {
          data.map((entry, index) => <Cell key={uuidv4()} fill={colors[index % colors.length]} />)
            }
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="bar__legend-labels">
          {labels}
        </div>
      </div>
    );
  }
}
