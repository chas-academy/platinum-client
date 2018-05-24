import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import * as Session from '../../Lib/Helpers/Session';
import { PageTitle } from '../../Lib/Common/Views';

/* eslint-disable react/prefer-stateless-function */
export default class Home extends Component {
  render() {
    return (
      <div>
        { !Session.isSignedIn() &&
          <div className="home-view" >
            <PageTitle title="PLATINUM" />
            <div className="width-35 mobile-width">
              <div className="width-100 center-content-row mobile-center-content-column ">
                <Button href="/sign-in" fluid color="red" size="large" className="button-opacity margin-r-05">SIGN IN</Button>
                <Button href="/sign-up" fluid color="red" size="large" className="button-opacity margin-l-05">SIGN UP</Button>
              </div>
              <div className="width-100 center-content-row margin-t-1">
                <Button href="/howdoesitwork" fluid color="red" size="large" className="button-opacity">HOW DOES IT WORK?</Button>
              </div>
            </div>
          </div>
        }
        { Session.isSignedIn() &&
        <div className="home-view">
          <PageTitle title="PLATINUM" />
          <div className="width-100 center-content">
            <div className="width-35 mobile-width">
              <div className="width-100 center-content-row">
                <Button href="/create-questionnaire" fluid color="red" size="large" className="button-opacity">LET&apos;S GET STARTED!</Button>
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
