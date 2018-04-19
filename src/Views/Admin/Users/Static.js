import React, { Component } from 'react';
import { PageTitle } from '../../../Lib/Common/Views';
import AdminUserStatic from '../../../Components/Forms/Static/Admin/User';

/* eslint-disable react/prefer-stateless-function */
export default class New extends Component {
  render() {
    return (
      <div className="users-form-static">
        <PageTitle title="User" appName="Admin" />
        <div className="form-wrapper -default">
          <AdminUserStatic {...this.props} />
        </div>
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
