import React, { Component } from 'react'
import { PageTitle } from '../../Lib/Common/Views'
import SignUpForm from "../../Components/Forms/SignUp";


export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-view">
        <PageTitle title="Sign Up" />
        <SignUpForm />
      </div>
    )
  }
}
