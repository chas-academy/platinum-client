import React, { Component } from 'react';
import Question from './Question';
import { Button } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
import { PageTitle } from '../../Lib/Common/Views';
import openSocket from 'socket.io-client';

/* eslint-disable react/prop-types */

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
    this.subscribeToResult = this.subscribeToResult.bind(this);
  }
  componentWillMount() {
    this.props.fetchPoll(`/polls/${this.props.pollId}`);
    this.subscribeToResult();
  }
  nextQuestion() {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
    });
  }
  prevQuestion() {
    this.setState({
      currentQuestion: this.state.currentQuestion - 1,
    });
  }

  subscribeToResult() {
    const socket = openSocket(process.env.REACT_APP_API_BASE_URL);

    socket.on(`/polls/${this.props.pollId}`, poll => this.props.pollFetched(poll));
  }

  render() {
    const buttons = [];
    let button;
    if (this.state.currentQuestion !== 0) {
      button = <Button size="large" key={uuidv4()} content="previus" onClick={this.prevQuestion} basic floated="left" />;
      buttons.push(button);
    }
    if (this.props.poll.questionnaire) {
      if (this.state.currentQuestion !== (this.props.poll.questionnaire.questions.length - 1)) {
        button = <Button size="large" key={uuidv4()} content="next" onClick={this.nextQuestion} basic floated="right" />;
        buttons.push(button);
      }
    }

    return (
      <div>
        { this.props.poll.questionnaire &&
        <div>
          <PageTitle title={this.props.poll.questionnaire.title} className="headline page-title" />
          <div className="center-content-column min-height-100">
            <div className="min-width-300px max-width-670px width-100">
              <Question
                question={this.props.poll.questionnaire.questions[this.state.currentQuestion]}
              />
              <div className="min-width-100 margin-t-2">
                {buttons}
              </div>
            </div>
          </div>
        </div>
        }
        { !this.props.poll.questionnaire && !this.props.isFethcing}
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
