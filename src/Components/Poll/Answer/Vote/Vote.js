import React, { Component } from 'react';
import Option from './Option';
import { Button, Message } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types */

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: [],
      errorMessage: '',
      multiselect: false,
    };
    this.toggleOption = this.toggleOption.bind(this);
    this.castVote = this.castVote.bind(this);
    this.addOption = this.addOption.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.question.id !== this.props.question.id) {
      this.setState({
        selectedOptions: [],
        errorMessage: '',
        multiselect: false,
      });
    }
    if (nextProps.question.type === 'multi-select') {
      this.setState({
        multiselect: true,
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
        errorMessage: 'please select one option',
      });
    }
  }
  render() {
    const options = [];
    this.props.question.options.forEach((option) => {
      let color = 'grey';
      if (this.state.selectedOptions.includes(option.id)) {
        color = 'green';
      }
      const newOption = (
        <Option
          key={uuidv4()}
          option={option}
          color={color}
          select={this.state.multiselect ? this.addOption : this.toggleOption}
        />);

      options.push(newOption);
    });
    return (
      <div className="center-content-column">
        <h1 className="text-allign-center margin-b-3">{this.props.question.name}</h1>
        <p className="text-allign-center margin-b-3">{this.props.question.type}</p>
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
