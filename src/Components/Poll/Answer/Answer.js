import React, { Component } from 'react';
import Vote from './Vote/Vote';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types, no-console */

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [

      ],
      currentQuestion: 0,
      redirectToResult: false,
    };
    this.addVote = this.addVote.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }
  addVote(questionId, optionId) {
    const answer = [...this.state.answer];

    answer.map((vote, index) => {
      if (vote.questionId === questionId) {
        answer.splice(index, 1);
      }
      return vote;
    });

    this.setState({
      answer: [
        ...answer,
        { questionId, optionId },
      ],
    });
  }
  nextQuestion() {
    if (this.state.currentQuestion < this.props.questionnaire.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    } else {
      console.log(this.state.answer);
      this.setState({
        redirectToResult: true,
      });
    }
  }

  render() {
    console.log();
    return (
      <div >
        {this.state.redirectToResult &&
        <Redirect to={`/polls/${this.props.pollId}/result`} />
        }
        {this.props.questionnaire &&
        <Vote
          question={this.props.questionnaire.questions[this.state.currentQuestion]}
          addVote={this.addVote}
          nextQuestion={this.nextQuestion}
        />
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types, no-console */
