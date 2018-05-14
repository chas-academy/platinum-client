import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// onClick={this.redirect('/start') basically linking to the start spage.
// maybe there's a better way than using this one-line crap

const GetStarted = () => (
  <div className="ui center aligned basic segment">

    <Link to="/sign-up"><Button size="huge" className="centered">{'Let\'s get started!'}</Button></Link>

  </div>
);

export default GetStarted;

