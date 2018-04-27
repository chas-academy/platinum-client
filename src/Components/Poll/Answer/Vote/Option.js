import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
/* eslint-disable react/prop-types */

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.selectOption = this.selectOption.bind(this);
  }
  selectOption() {
    this.props.select(this.props.option.id);
  }

  render() {
    return (
      <div className="margin-b-2 min-width-15">
        <Button
          fluid
          basic
          size="large"
          content={this.props.option.name}
          color={this.props.color}
          onClick={this.selectOption}
        />
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
