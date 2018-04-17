import React, { Component } from "react";
import { PageTitle } from "../../Lib/Common/Views";

/* eslint-disable react/prefer-stateless-function */
export default class MyProfile extends Component {
  render() {
    return (
      <div className="my-profile-view">
        <PageTitle title="My Profile" />
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
