import React, { Component } from 'react';
import Vote from './Vote/Vote';

/* eslint-disable react/prop-types, no-console */

export default class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [

      ],
      questions: [
        {
          id: 1,
          order: 1,
          questionnaireId: 1,
          updatedAt: '2018-04-03 02:23:35+00',
          type: 'select-one',
          createdAt: '2018-04-03 02:23:35+00',
          name: 'Do you Like Questions?',
          options: [
            {
              questionId: 1,
              id: 1,
              order: 1,
              updatedAt: '2018-04-03 18:48:57+00',
              name: 'Yes',
              createdAt: '2018-04-03 18:48:57+00',
            },
            {
              questionId: 1,
              id: 2,
              order: 2,
              updatedAt: '2018-04-05 16:36:15+00',
              name: 'No',
              createdAt: '2018-04-05 16:36:15+00',
            },
          ],
        },
        {
          id: 2,
          order: 2,
          questionnaireId: 1,
          updatedAt: '2018-04-01 08:53:08+00',
          type: 'select-one',
          createdAt: '2018-04-01 08:53:08+00',
          name: 'Why?',
          options: [
            {
              questionId: 2,
              id: 3,
              order: 1,
              updatedAt: '2018-04-01 22:32:22+00',
              name: 'don\'t know',
              createdAt: '2018-04-01 22:32:22+00',
            },
            {
              questionId: 2,
              id: 4,
              order: 2,
              updatedAt: '2018-04-03 16:51:50+00',
              name: 'Why not?!',
              createdAt: '2018-04-03 16:51:50+00',
            },
          ],
        },
        {
          id: 9,
          order: 3,
          questionnaireId: 1,
          updatedAt: '2018-04-03 23:43:57+00',
          type: 'select-one',
          createdAt: '2018-04-03 23:43:57+00',
          name: 'Why do you ask questions?',
          options: [
            {
              questionId: 9,
              id: 17,
              order: 1,
              updatedAt: '2018-04-04 22:36:39+00',
              name: 'Because i\'t fun!',
              createdAt: '2018-04-04 22:36:39+00',
            },
            {
              questionId: 9,
              id: 18,
              order: 2,
              updatedAt: '2018-04-04 03:15:29+00',
              name: 'I like to annoy people!',
              createdAt: '2018-04-04 03:15:29+00',
            },
          ], // this is just dummy-data will bve replaced with data from api cal
        },
      ],
      currentQuestion: 0,
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
    if (this.state.currentQuestion < this.state.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    } else {
      console.log(this.state.answer);
    }
  }

  render() {
    return (
      <div >
        <Vote
          question={this.state.questions[this.state.currentQuestion]}
          addVote={this.addVote}
          nextQuestion={this.nextQuestion}
        />
      </div>
    );
  }
}

/* eslint-enable react/prop-types, no-console */
