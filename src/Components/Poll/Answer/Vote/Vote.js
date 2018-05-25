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
      selectedOptions: [],
      answered: false,
      errorMessage: '',
      multiselect: false,
    };
    this.toggleOption = this.toggleOption.bind(this);
    this.castVote = this.castVote.bind(this);
    this.addOption = this.addOption.bind(this);
  }

  componentWillMount() {
    if (checkIfVoted(this.props.answer.pollId, this.props.question.id)) {
      this.setState({
        answered: true,
        errorMessage: 'You have already voted on this question',
      });
    }
    if (this.props.question.type === 'multi-select') {
      this.setState({
        multiselect: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.question.id !== this.props.question.id) {
      this.setState({
        selectedOptions: [],
        answered: false,
        errorMessage: '',
        multiselect: false,
      });
    }
    if (nextProps.question.type === 'multi-select') {
      this.setState({
        multiselect: true,
      });
    }
    if (checkIfVoted(this.props.answer.pollId, nextProps.question.id)) {
      this.setState({
        answered: true,
        errorMessage: 'You have already voted on this question',
      });
    }
  }

  toggleOption(id) {
    this.setState({
      selectedOptions: [id],
    });
  }
  addOption(id) {
    let toBeAdded = true;
    const selectedOptions = [...this.state.selectedOptions];

    selectedOptions.map((optionId, index) => {
      if (optionId === id) {
        toBeAdded = false;
        selectedOptions.splice(index, 1);
      }
      return optionId;
    });

    if (toBeAdded) {
      this.setState({
        selectedOptions: [
          ...selectedOptions,
          id,
        ],
      });
    } else {
      this.setState({
        selectedOptions: [
          ...selectedOptions,
        ],
      });
    }
  }
  castVote() {
    if (this.state.selectedOptions.length !== 0) {
      const vote = {
        questionId: this.props.question.id,
        optionIds: this.state.selectedOptions,
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
        errorMessage: 'please select a option',
      });
    }
  }
  render() {
    const options = [];
    this.props.question.options.forEach((option) => {
      let color = 'grey';
      if (this.state.selectedOptions.includes(option.id) && !this.state.answered) {
        color = 'olive';
      }
      const newOption = (
        <Option
          key={uuidv4()}
          option={option}
          color={color}
          select={this.state.multiselect ? this.addOption : this.toggleOption}
          disabled={this.state.answered}
        />);

      options.push(newOption);
    });
    return (
      <div className="center-content-column">
        <h1 className="text-allign-center margin-b-3">{this.props.question.name}</h1>
        <p className="text-allign-center margin-b-3 font-color-white">{this.props.question.type === 'select-one' ? 'Select one' : 'Select all that apply' }</p>
        {options}
        <Message content={this.state.errorMessage} hidden={this.state.errorMessage === ''} className="opacity" />
        <div className="min-width-15 margin-t-2">
          <Button
            className="button-opacity"
            size="large"
            color="orange"
            content={!this.state.answered ? 'Vote' : 'Next'}
            onClick={!this.state.answered ? this.castVote : this.props.nextQuestion}
            fluid
          />
        </div>

        {this.state.answered &&
        <div className="min-width-15 margin-t-2">
          <Button
            className="button-opacity"
            size="large"
            color="blue"
            content="View Result"
            onClick={this.props.redirectToResult}
            fluid
          />
        </div>
        }
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
