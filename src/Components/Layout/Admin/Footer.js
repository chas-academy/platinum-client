import React, { Component } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <Link to="/">{process.env.REACT_APP_SITE_NAME}</Link>
          &nbsp; • &nbsp;
          <Link to="/admin/dashboard">Admin Theme</Link>
        </div>
      </footer>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */
