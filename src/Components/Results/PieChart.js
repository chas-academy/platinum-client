import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types, no-mixed-operators */
export default class PieChartResult extends Component {
  render() {
    const data = [];
    const labels = [];
    const colors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff', '#aa6e28', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000080', '#808080', '#000000'];

    this.props.options.forEach((element, index) => {
      const option = {
        name: element.name,
        value: element.votes,
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

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {percent !== 0 ? `${(percent * 100).toFixed(0)}%` : ''}
        </text>
      );
    };

    return (
      <div>
        <ResponsiveContainer height={400}>
          <PieChart width={800} height={400} onMouseEnter={this.onPieEnter} >
            <Pie
              verticalAlign="middle"
              data={data}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
            >
              {
          data.map((entry, index) => <Cell key={uuidv4()} fill={colors[index % colors.length]} />)
            }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="bar__legend-labels">
          {labels}
        </div>
      </div>
    );
  }
}
