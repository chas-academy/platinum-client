import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as Session from '../../Lib/Helpers/Session';


const GetStarted = () => (
  <div className="ui center aligned basic segment">

    { !Session.isSignedIn() &&
    <Link to="/sign-up"><Button size="huge" color="olive" className="centered button-opacity">{'Let\'s get started!'}</Button></Link>
  }
    { Session.isSignedIn() &&
    <Link to="/create-questionnaire"><Button size="huge" color="olive" className="centered button-opacity">{'Let\'s get started!'}</Button></Link>
  }
  </div>
);

export default GetStarted;

