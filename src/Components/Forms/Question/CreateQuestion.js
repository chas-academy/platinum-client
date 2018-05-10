import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Option from './Option/CreateOption';
import uuidv1 from 'uuid/v1';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types */
export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      question: '',
      option1: '',
      option2: '',
      options: [
      ],
      redirectToQuestionnaires: false,
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.triggerFetchQuestionnaire = this.triggerFetchQuestionnaire.bind(this);
  }
  componentWillMount() {
    this.setState({
      options: [
        <Form.Group
          key={uuidv1()}
          className="center-content padding-b-1"
          unstackable
          widths={2}
        >
          <Option name="option1" width={11} value={this.state.option1} onChange={this.handleChange} />
        </Form.Group>,
        <Form.Group
          key={uuidv1()}
          className="center-content padding-b-1"
          unstackable
          widths={2}
        >
          <Option name="option2" width={11} value={this.state.option2} onChange={this.handleChange} />
        </Form.Group>,
      ],
    });
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
      type: 'select-one',
      order: 1,
      options,
    };

    this.props.createQuestion(data);
    this.props.onSubmit();
    setTimeout(this.triggerFetchQuestionnaire, 50);
  }
  triggerFetchQuestionnaire() {
    this.props.fetchQuestionnaire(this.props.questionnaireId);
  }
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  addOption() {
    this.setState({
      [`option${this.state.options.length + 1}`]: '',
      options: [
        ...this.state.options,
        <Form.Group
          className="center-content padding-b-1"
          key={uuidv1()}
          unstackable
          widths={2}
        >
          <Option name={`option${this.state.options.length + 1}`} width={10} value={this.state[`option${this.state.options.length + 1}`]} onChange={this.handleChange} />
          <Form.Button
            width={1}
            type="button"
            negative
            compact
            content="X"
            value={this.state.options.length}
            onClick={this.removeOption}
          />
        </Form.Group>,
      ],
    });
  }

  removeOption(e) {
    const options = [...this.state.options];
    options.splice(e.target.value, 1);
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
          <Form id="creat-question-form">
            <div className="padding-tb-2">
              <Form.Group
                className="center-content padding-b-1"
                widths={2}
                unstackable
              >
                <Form.Input
                  className="center"
                  onChange={this.handleChange}
                  name="question"
                  value={this.state.question}
                  placeholder="Question"
                  required
                  type="text"
                  width={11}
                />
              </Form.Group>
              {this.state.options}
            </div>
          </Form>
          <Button
            basic
            className="margin-l-1"
            content="add option"
            icon="plus"
            labelPosition="left"
            onClick={this.addOption}
          />
        </div>
        <Button
          basic
          content="Add"
          attached="bottom"
          onClick={this.createQuestion}
        />
      </div>
    );
  }
}
