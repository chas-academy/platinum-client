import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

/* eslint-disable react/prop-types */

export default class CreateOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.name]: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Form.Input
        width={this.props.width}
        onChange={this.handleChange}
        name={this.props.name}
        value={this.state[this.props.name]}
        placeholder="Option"
        required
        type="text"
      />
    );
  }
}

/* eslint-enable react/prop-types */
