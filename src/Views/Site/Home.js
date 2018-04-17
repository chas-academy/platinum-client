import React, { Component } from "react";
import ReactLogo from "../../Assets/Images/react-logo.svg";
import { PageTitle } from "../../Lib/Common/Views";

/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
  render() {
    return (
      <div className="home-view">
        <header className="home-view-header">
          <img src={ReactLogo} className="home-view-logo" alt="React Logo" />
          <PageTitle />
        </header>
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
