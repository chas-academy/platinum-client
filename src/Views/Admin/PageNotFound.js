import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';

/* eslint-disable react/prefer-stateless-function */

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-view">
        <PageTitle title="404" appName="Admin" />
        <p>Sorry, the page you are looking for is not found.</p>
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
