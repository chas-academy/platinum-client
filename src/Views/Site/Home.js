import React, { Component } from 'react'
import { Header, Button} from 'semantic-ui-react'


/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
<<<<<<< HEAD
    render() {
        return (
            <div className="home-view">
                <Header as='h1'>PLATINUM</Header>

                <div className="ui two column centered grid stackable columns">
                    <div className="four column centered row">    
                        <div className="column middle aligned">
                            <Button fluid inverted color='orange'>LOG IN</Button>
                        </div>
                        <div className="column middle aligned">
                            <Button fluid inverted color='red'>REGISTER</Button>
                        </div>
                    </div>
                    <div className="two column middle aligned">
                        <Button fluid inverted color="pink">WHAT WE DO</Button>
                    </div>
                </div>
            </div>
        )
    }
=======
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
>>>>>>> 275ae7753088b96f634263cb535b174bd6ef1129
}

/* eslint-enable react/prefer-stateless-function */
