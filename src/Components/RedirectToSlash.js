import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

/* eslint-disable react/prop-types */

export default class RedirectToSlash extends Component {
  componentWillMount() {
    this.props.auth(false);
  }

  render() {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: this.props.location },
        }}
      />
    );
  }
}

/* eslint-enable react/prop-types */
