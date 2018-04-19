import React from 'react';

import { Button } from 'semantic-ui-react';


// onClick={this.redirect('/start') basically linking to the start spage.
// maybe there's a better way than using this one-line crap

/* eslint-disable react/no-unescaped-entities */


const GetStarted = () => (
  <div className="ui center aligned basic segment">
    <Button size="huge" className="centered">
          Let's get started!
    </Button>
  </div>
);

export default GetStarted;

/* eslint-enable react/no-unescaped-entities */
