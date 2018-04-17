import React, { Component } from "react";
import { PageTitle } from "../../../Lib/Common/Views";
import AdminUsersDataTable from "../../../Redux/Containers/Admin/Users";

/* eslint-disable react/prefer-stateless-function */
export default class List extends Component {
  render() {
    return (
      <div className="users-view">
        <PageTitle title="Users" appName="Admin" />
        <AdminUsersDataTable {...this.props} />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
