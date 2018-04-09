import React, { Component } from 'react'
import ReactLogo from '../../Assets/Images/react-logo.svg'
import { PageTitle } from '../../Lib/Common/Views'
import { Button } from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    return (
      <div className="home-view">
        <header className="home-view-header">
			<Button>Click Here</Button>
          <img src={ReactLogo} className="home-view-logo" alt="React Logo" />
          <PageTitle />
        </header>
      </div>
    )
  }
}
