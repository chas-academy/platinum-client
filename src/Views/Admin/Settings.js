import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';

/* eslint-disable react/prefer-stateless-function */

export default class Settings extends Component {
  render() {
    return (
      <div className="settings-view">
        <PageTitle title="Settings" appName="Admin" />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
