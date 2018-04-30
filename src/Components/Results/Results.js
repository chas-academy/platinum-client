import React, { Component } from 'react';
import Question from './Question';
import { Button } from 'semantic-ui-react';
/* eslint-disable react/prop-types */

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnaire: {
        id: 1,
        title: 'My Awesome Questionnaire!',
        updatedAt: '2018-04-09 12:42:48+00',
        type: 'premium',
        userId: 1,
        createdAt: '2018-04-09 12:42:48+00',
        questions: [
          {
            id: 1,
            order: 1,
            questionnaireId: 1,
            updatedAt: '2018-04-08 00:26:41+00',
            type: 'select-one',
            createdAt: '2018-04-08 00:26:41+00',
            name: 'Do you Like Questions?',
            options: [
              {
                questionId: 1,
                id: 1,
                order: 1,
                updatedAt: '2018-04-09 07:32:50+00',
                name: 'Yes',
                createdAt: '2018-04-09 07:32:50+00',
                votes: [
                  { voteId: 1, optionId: 1, pollId: 1 },
                  { voteId: 4, optionId: 1, pollId: 1 },
                ],
              },
              {
                questionId: 1,
                id: 2,
                order: 2,
                updatedAt: '2018-04-09 01:44:20+00',
                name: 'No',
                createdAt: '2018-04-09 01:44:20+00',
                votes: [
                  { voteId: 7, optionId: 2, pollId: 1 },
                ],
              },
            ],
          },
          {
            id: 2,
            order: 2,
            questionnaireId: 1,
            updatedAt: '2018-04-09 06:13:55+00',
            type: 'select-one',
            createdAt: '2018-04-09 06:13:55+00',
            name: 'Why?',
            options: [
              {
                questionId: 2,
                id: 3,
                order: 1,
                updatedAt: '2018-04-07 19:22:29+00',
                name: 'don\'t know',
                createdAt: '2018-04-07 19:22:29+00',
                votes: [
                  { voteId: 2, optionId: 3, pollId: 1 },
                  { voteId: 5, optionId: 3, pollId: 1 },
                ],
              },
              {
                questionId: 2,
                id: 4,
                order: 2,
                updatedAt: '2018-04-08 23:42:55+00',
                name: 'Why not?!',
                createdAt: '2018-04-08 23:42:55+00',
                votes: [
                  { voteId: 8, optionId: 4, pollId: 1 },

                ],
              },
            ],
          },
          {
            id: 9,
            order: 3,
            questionnaireId: 1,
            updatedAt: '2018-04-08 21:11:44+00',
            type: 'select-one',
            createdAt: '2018-04-08 21:11:44+00',
            name: 'Why do you ask questions?',
            options: [
              {
                questionId: 9,
                id: 17,
                order: 1,
                updatedAt: '2018-04-08 19:24:31+00',
                name: 'Because i\'t fun!',
                createdAt: '2018-04-08 19:24:31+00',
                votes: [
                  { voteId: 9, optionId: 17, pollId: 1 },
                ],

              },
              {
                questionId: 9,
                id: 18,
                order: 2,
                updatedAt: '2018-04-08 06:05:06+00',
                name: 'I like to annoy people!',
                createdAt: '2018-04-08 06:05:06+00',
                votes: [
                  { voteId: 3, optionId: 18, pollId: 1 },
                  { voteId: 6, optionId: 18, pollId: 1 },
                ],
              },
            ],
          },
        ],
      }, // this state will be removed when result data from api can be fetched
      currentQuestion: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
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
    return (
      <div>
        <h2>{this.state.questionnaire.title}</h2>
        <Question
          question={this.state.questionnaire.questions[this.state.currentQuestion]}
        />
        { this.state.currentQuestion !== 0 &&
        <Button content="previus" onClick={this.prevQuestion} />
        }
        { this.state.currentQuestion !== (this.state.questionnaire.questions.length - 1) &&
        <Button content="next" onClick={this.nextQuestion} />
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
