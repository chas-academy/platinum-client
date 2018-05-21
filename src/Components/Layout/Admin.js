import React, { Component } from 'react';
import Header from './Admin/Header';
import Footer from './Admin/Footer';

/* eslint-disable react/prefer-stateless-function, react/prop-types */

export default class Admin extends Component {
  render() {
    return (
      <div className="layout-admin">
        <Header />
        <main className="container-fluid">
          <div className="wrapper">
            <div className="content">{this.props.children}</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function, react/prop-types */
