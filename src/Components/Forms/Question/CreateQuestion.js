import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Option from './Option/CreateOption';
import uuidv1 from 'uuid/v1';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types, max-len */

const types = [
  { key: 's', text: 'Select-One', value: 'select-one' },
  { key: 'm', text: 'Multi-Select', value: 'multi-select' },
];
export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      type: '',
      option1: '',
      option2: '',
      options: [],
      redirectToQuestionnaires: false,
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }
  componentWillMount() {
    if (!this.props.question) {
      this.setState({
        type: 'select-one',
        options: [
          <Form.Group
            key={uuidv1()}
            className="center-content padding-b-1"
            unstackable
            widths={2}
          >
            <Option name="option1" width={11} value={this.state.option1} order={1} onChange={this.handleChange} />
            <Form.Button
              width={1}
              type="button"
              negative
              className="align-bottom button-opacity"
              content="X"
              value={0}
              onClick={this.removeOption}
              size="large"
            />
          </Form.Group>,
          <Form.Group
            key={uuidv1()}
            className="center-content padding-b-1"
            unstackable
            widths={2}
          >
            <Option name="option2" width={11} value={this.state.option2} order={2} onChange={this.handleChange} />
            <Form.Button
              width={1}
              type="button"
              negative
              className="align-bottom button-opacity"
              content="X"
              value={1}
              onClick={this.removeOption}
              size="large"
            />
          </Form.Group>,
        ],
      });
    }

    if (this.props.question) {
      this.setState({
        question: this.props.question.name,
        type: this.props.question.type,
      });
      const oldOptions = [];
      this.props.question.options.forEach((option, index) => {
        this.setState({
          [`option${index + 1}`]: option.name,
        });

        const oldOption =
        (
          <Form.Group
            className="center-content padding-b-1"
            key={uuidv1()}
            unstackable
            widths={2}
          >
            <Option name={`option${index + 1}`} width={11} value={option.name} order={index + 1} onChange={this.handleChange} />
            <Form.Button
              width={1}
              className="align-bottom button-opacity"
              type="button"
              negative
              content="X"
              value={index}
              onClick={this.removeOption}
              size="large"
            />
          </Form.Group>);
        oldOptions.push(oldOption);
      });

      this.setState({
        options: [
          ...oldOptions,

        ],
      });
    }
  }
  createQuestion() {
    const options = [];

    this.state.options.map((option, index) => {
      options.push({ name: this.state[`option${index + 1}`], order: index + 1 });
      return option;
    });
    const data = {
      questionnaireId: this.props.questionnaireId,
      name: this.state.question,
      type: this.state.type,
      order: this.props.countOfQuestions + 1,
      options,
    };

    this.props.createQuestion(data, this.props.page);
    this.props.onSubmit();
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  updateQuestion() {
    const options = this.state.options.map((option, index) => {
      const newOption = { name: this.state[`option${option.props.children[0].props.order}`], order: index + 1 };
      if (this.props.question.options[option.props.children[0].props.order - 1]) {
        newOption.id = this.props.question.options[option.props.children[0].props.order - 1].id;
      }
      return newOption;
    });
    const data = {
      name: this.state.question,
      type: this.state.type,
      order: this.props.question.order,
      options,
    };
    this.props.updateQuestion(data, this.props.question.id, this.props.question.questionnaireId, this.props.page);
    this.props.onSubmit();
  }

  addOption() {
    if (this.state.options.length !== 0) {
      this.setState({
        [`option${this.state.options[this.state.options.length - 1].props.children[0].props.order + 1}`]: '',
        options: [
          ...this.state.options,
          <Form.Group
            className="center-content padding-b-1"
            key={uuidv1()}
            unstackable
            widths={2}
          >
            <Option
              name={`option${this.state.options[this.state.options.length - 1].props.children[0].props.order + 1}`}
              width={11}
              value=""
              order={this.state.options[this.state.options.length - 1].props.children[0].props.order + 1}
              onChange={this.handleChange}
            />
            <Form.Button
              width={1}
              type="button"
              negative
              className="align-bottom button-opacity"
              content="X"
              value={this.state.options.length}
              onClick={this.removeOption}
              size="large"
            />
          </Form.Group>,
        ],
      });
    } else {
      this.setState({
        option1: '',
        options: [
          ...this.state.options,
          <Form.Group
            className="center-content padding-b-1"
            key={uuidv1()}
            unstackable
            widths={2}
          >
            <Option name="option1" width={11} value="" order={1} onChange={this.handleChange} />
            <Form.Button
              width={1}
              type="button"
              negative
              className="align-bottom button-opacity"
              content="X"
              value={0}
              onClick={this.removeOption}
              size="large"
            />
          </Form.Group>,
        ],
      });
    }
  }

  removeOption(e) {
    let options = [...this.state.options];
    options.map((option) => {
      if (option.props.children[1].props.value === +e.target.value) {
        if (this.props.question) {
          if (this.props.question.options[option.props.children[0].props.order - 1]) {
            this.props.deleteOption(
              this.props.question.options[option.props.children[0].props.order - 1].id,
              this.props.question.id,
            );
          }
        }
      }
      return option;
    });
    options.splice(e.target.value, 1);
    options = options.map((option, index) => {
      const newOption = (
        <Form.Group
          className="center-content padding-b-1"
          key={uuidv1()}
          unstackable
          widths={2}
        >
          <Option
            name={option.props.children[0].props.name}
            width={11}
            value={this.state[option.props.children[0].props.name]}
            order={option.props.children[0].props.order}
            onChange={this.handleChange}
          />
          <Form.Button
            width={1}
            type="button"
            negative
            className="align-bottom button-opacity"
            content="X"
            value={index}
            onClick={this.removeOption}
            size="large"
          />
        </Form.Group>);
      return newOption;
    });
    this.setState({
      options: [...options],
    });
  }

  render() {
    return (
      <div className="margin-tb-1">
        { this.state.redirectToQuestionnaires &&
        <Redirect to="/my-questionnaires" />
        }
        <div>
          <Form id="creat-question-form" size="large">
            <div className="padding-tb-2">
              <Form.Group
                className="center-content padding-b-1"
                widths={2}
              >
                <Form.Input
                  className="center"
                  onChange={this.handleChange}
                  name="question"
                  value={this.state.question}
                  placeholder="Question"
                  type="text"
                  width={11}
                  label="Question"
                />
                <Form.Select label="Type" name="type" options={types} width={1} defaultValue={this.state.type} onChange={this.handleChange} />
              </Form.Group>
              {this.state.options}
            </div>
          </Form>
          <Button
            className="margin-l-1 button-opacity"
            content="Add option"
            color="yellow"
            icon="plus"
            labelPosition="left"
            onClick={this.addOption}
            size="large"
          />
        </div>
        <div className="width-100 center-content margin-tb-5">
          <div className="width-35 mobile-width">
            <div className="width-100 center-content-row">
              <Button
                basic
                fluid
                content={this.props.question ? 'Update' : 'Add'}
                attached="bottom"
                onClick={this.props.question ? this.updateQuestion : this.createQuestion}
                size="large"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
