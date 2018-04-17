import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';

/* eslint-disable react/prefer-stateless-function */

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-view">
        <PageTitle title="Dashboard" appName="Admin" />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
