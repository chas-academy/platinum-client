import React, { Component } from 'react';
/* eslint-disable */
export default class  ListableQuestion extends Component {

  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <div className="margin-tb-1">
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}
