import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import * as Session from '../../Lib/Helpers/Session';

/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
  render() {
    return (
      <div>
        { !Session.isSignedIn() &&
          <div className="home-view" >
            <Header as="h1">PLATINUM</Header>
            <div className="ui two column centered grid stackable columns">
              <div className="two column centered row">
                <div className="two column aligned">
                  <Button href="/sign-in" fluid inverted color="orange" size="large">SIGN IN</Button>
                </div>
                <div className="two column aligned">
                  <Button href="/sign-up" fluid inverted color="orange" size="large">SIGN UP</Button>
                </div>
              </div>
              <div className="two column middle aligned">
                <Button href="/howdoesitwork" fluid inverted color="orange" size="large">HOW DOES IT WORK?</Button>
              </div>
            </div>
          </div>
        }
        { Session.isSignedIn() &&
        <div className="home-view">
          <Header as="h1">PLATINUM</Header>
          <div className="ui one column centered grid stackable columns">
            <div className="one column centered row">
              <div className="column middle aligned">
                <Button href="/create-questionnaire" fluid inverted color="orange">LET&apos;S GET STARTED!</Button>
              </div>
            </div>
          </div>
        </div>
          }
      </div>
    );
  }
}

/* eslint-enable react/prefer-stateless-function */
