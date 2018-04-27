import React, { Component } from 'react';
import Answer from './Answer/Answer';

/* eslint-disable react/prop-types */

export default class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: {
        userId: 1,
        qrCode: null,
        status: 'active',
        id: '2242fa00-b4ea-434d-a5ab-80b4783533f1',
        questionnaireId: 1,
        maxNumOfVotes: 50,
        link: 'http://localhost:7771/polls/2242fa00-b4ea-434d-a5ab-80b4783533f1',
        duration: null,
        createdAt: '2018-04-25 22:01:09.408+00',
        updatedAt: '2018-04-25 22:01:09.409+00',
        closedAt: null,
      }, // dummy-data will be replaced with dynamic data from api call
    };
  }

  render() {
    return (
      <div >
        <Answer pollId={this.state.poll.pollId} />
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
