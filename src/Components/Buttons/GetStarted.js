import React from 'react';
import { Button } from 'semantic-ui-react';

// onClick={this.redirect('/start') basically linking to the start spage.
// maybe there's a better way than using this one-line crap

const GetStarted = () => (
  <div className="ui center aligned basic segment">

    <Button padded centered size="huge" className="centered">{'Let\'s get started!'}</Button>

  </div>
);

export default GetStarted;

