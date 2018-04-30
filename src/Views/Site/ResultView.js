
import React, { Component } from 'react'
import {Container, Header} from 'semantic-ui-react'

class ResultView extends React.Component{
 

  constructor(props){
    super(props);
    this.state ={
      chartData:{
        labels: ['Example 1', 'Example 2', 'Example 3'],
          data:[

            617689,
            654890,
            925654
          ],
          backgroundColor:  [// Dummy data for the chart
          'rgba(255, 99, 132, 0.2)', //dummy color for the background-color in the chart
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ]
      }
    }
  }
  render(){
    return (
      <div className="chart">
      <Bar
      data={this.state.chartData}
      width={100}
      height={50}
      options={{
      }}
      />
      </div>
    )
  }
  }