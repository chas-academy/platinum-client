import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';
import SignUpForm from '../../Redux/Containers/Users/SignUp';
/* eslint-disable react/prefer-stateless-function */
export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-view">
        <PageTitle title="Sign Up" />
        <SignUpForm />
      </div>
    );
  }
}
