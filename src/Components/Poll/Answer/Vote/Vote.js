import React, { Component } from 'react';
import Option from './Option';
import { Button, Message } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types */

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      errorMessage: '',
    };
    this.toggleOption = this.toggleOption.bind(this);
    this.castVote = this.castVote.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.question.id !== this.props.question.id) {
      this.setState({
        selectedOption: null,
        errorMessage: '',
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
      if (option.id === this.state.selectedOption) {
        color = 'green';
      }
      const newOption = (
        <Option
          key={uuidv4()}
          option={option}
          color={color}
          select={this.toggleOption}
        />);

      options.push(newOption);
    });

    return (
      <div className="center-content-column">
        <h1 className="text-allign-center margin-b-3">{this.props.question.name}</h1>
        {options}
        <Message content={this.state.errorMessage} hidden={this.state.errorMessage === ''} />
        <div className="min-width-15 margin-t-2">
          <Button basic size="large" color="orange" content="Vote!" onClick={this.castVote} fluid />
        </div>
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
