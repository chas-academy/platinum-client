import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { NavLink, AuthNavLink } from '../../../Lib/Common/Views';
import SignOutButton from '../../../Redux/Containers/Sessions/SignOutButton';

/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid,
prefer-destructuring, react/prop-types */

class Header extends Component {
  render() {
    const referrer = window.location.pathname;
    const path = this.props.match.path;

    return (
      <header className="header">
        <Navbar className="navbar-fixed-top">
          <Navbar.Header>
            <Link to="/admin/users" className="navbar-brand">
              <span className="text">Admin</span>
            </Link>
            <Navbar.Toggle id="js-navbar-toggle-btn" />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <NavLink title="Home" to="/" />
              <AuthNavLink title="Users" to="/admin/users" path={path} />
              <SignOutButton referrer={referrer} />
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default withRouter(Header);

/* eslint-enable react/prefer-stateless-function, jsx-a11y/anchor-is-valid,
prefer-destructuring, react/prop-types */
