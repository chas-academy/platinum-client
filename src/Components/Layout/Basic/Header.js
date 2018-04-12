import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { NavLink, AuthNavLink } from '../../../Lib/Common/Views'
import SignOutButton from '../../../Redux/Containers/Sessions/SignOutButton'
//import Logo from '../../../Assets/Images/Logo.jpg'

//do not remove just yet. ask Jonas why tho
//{process.env.REACT_APP_SITE_NAME}

class Header extends Component {
  render() {
    const path = this.props.match.path
    const referrer = window.location.pathname

    return (
      <header className="header">
        <Navbar >
          <Navbar.Header>
            <Link to="/" className="navbar-brand">Platinum</Link>
            <Navbar.Toggle id="js-navbar-toggle-btn" />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="navbar-nav nav navbar-right">
              <NavLink title="Sign In" to="/sign-in" path={path} isSignedOut />
              <NavLink title="Sign up" to="/sign-up" path={path} isSignedOut />
              <NavLink title="About us" to="/about" path={path} isSignedOut/>
              <AuthNavLink title="Admin" to="/admin/dashboard" />
              <AuthNavLink title="My Profile" to="/my-profile" path={path} />
              <AuthNavLink title="Created polls" to="/created-polls" path={path} />
              <NavLink title="Pricing" to="/pricing" path={path} />
              <SignOutButton referrer={referrer} />
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default withRouter(Header)
