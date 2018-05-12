import React, { Component } from 'react';
import Option from './Option';
import { checkIfVoted } from '../../../../Lib/Helpers/Session';
import { Button, Message } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types */

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      answered: false,
      errorMessage: '',
    };
    this.toggleOption = this.toggleOption.bind(this);
    this.castVote = this.castVote.bind(this);
  }

  componentWillMount() {
    if (checkIfVoted(this.props.answer.pollId, this.props.question.id)) {
      this.setState({
        answered: true,
        errorMessage: 'You have already voted on this question',
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.question.id !== this.props.question.id) {
      this.setState({
        selectedOption: null,
        answered: false,
        errorMessage: '',
      });
    }
    if (checkIfVoted(this.props.answer.pollId, nextProps.question.id)) {
      this.setState({
        answered: true,
        errorMessage: 'You have already voted on this question',
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedOption !== this.state.selectedOption) {
      this.props.addVote(this.props.question.id, this.state.selectedOption);
      // this should probaly be removed, has no real use
    }
  }

  toggleOption(id) {
    this.setState({
      selectedOption: id,
    });
  }
  castVote() {
    if (this.state.selectedOption !== null) {
      const vote = {
        questionId: this.props.question.id,
        optionId: this.state.selectedOption,
        answerId: this.props.answer.id,
        pollId: this.props.answer.pollId,
      };
      this.props.castVote(vote);
      this.props.nextQuestion();
      this.setState({
        errorMessage: '',
      });
    } else {
      this.setState({
        errorMessage: 'please select one option',
      });
    }
  }
  render() {
    const options = [];
    this.props.question.options.forEach((option) => {
      let color = 'grey';
      if (option.id === this.state.selectedOption && !this.state.answered) {
        color = 'green';
      }
      const newOption = (
        <Option
          key={uuidv4()}
          option={option}
          color={color}
          select={this.toggleOption}
          disabled={this.state.answered}
        />);

      options.push(newOption);
    });

    return (
      <div className="center-content-column">
        <h1 className="text-allign-center margin-b-3">{this.props.question.name}</h1>
        {options}
        <Message content={this.state.errorMessage} hidden={this.state.errorMessage === ''} />
        <div className="min-width-15 margin-t-2">
          <Button basic size="large" color="orange" content={!this.state.answered ? 'Vote' : 'Next'} onClick={!this.state.answered ? this.castVote : this.props.nextQuestion} fluid />
        </div>

        {this.state.answered &&
        <div className="min-width-15 margin-t-2">
          <Button basic size="large" color="blue" content="View Result" onClick={this.props.redirectToResult} fluid />
        </div>
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
