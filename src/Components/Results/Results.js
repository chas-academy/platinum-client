import React, { Component } from 'react';
import Question from './Question';
import { Button } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types */

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
  }

  componentWillMount() {
    this.props.fetchPoll(`/polls/${this.props.pollId}`);
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
  render() {
    const buttons = [];
    let button;
    if (this.state.currentQuestion !== 0) {
      button = <Button key={uuidv4()} content="previus" onClick={this.prevQuestion} />;
      buttons.push(button);
    }
    if (this.props.poll.questionnaire) {
      if (this.state.currentQuestion !== (this.props.poll.questionnaire.questions.length - 1)) {
        button = <Button key={uuidv4()} content="next" onClick={this.nextQuestion} />;
        buttons.push(button);
      }
    }

    return (
      <div>
        { this.props.poll.questionnaire &&
        <div>
          <h2>{this.props.poll.questionnaire.title}</h2>
          <Question
            question={this.props.poll.questionnaire.questions[this.state.currentQuestion]}
          />
          {buttons}
        </div>
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
