import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import CreateQuestion from '../../../Redux/Containers/Questionnaires/CreateQuestion';
import ListableQuestion from '../../Questions/ListableQuestion';
import uuidv4 from 'uuid/v4';
import { isNumber } from 'util';

/* eslint-disable react/prop-types */
export default class CreateQuestionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      redirectToQuestionnaires: false,
      addingQuestion: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.activeQuestion = this.activeQuestion.bind(this);
    this.createQuestionnaire = this.createQuestionnaire.bind(this);
    this.triggerRedirect = this.triggerRedirect.bind(this);
  }
  componentWillMount() {
    if (!this.props.location.state) {
      this.props.removeActiveQuestionnaire();
    }
  }
  componentDidMount() {
  }
  createQuestionnaire() {
    const data = {
      title: this.state.title,
      type: 'premium',
    };
    this.props.createQuestionnaire(data);
  }

  activeQuestion() {
    this.setState({ addingQuestion: !this.state.addingQuestion });
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  triggerRedirect() {
    this.setState({
      redirectToQuestionnaires: true,
    });
  }

  render() {
    const questions = [];

    if (this.props.activeQuestionnaire.questions) {
      if (this.props.activeQuestionnaire.questions[0]) {
        if (isNumber(this.props.activeQuestionnaire.questions[0].id)) {
          this.props.activeQuestionnaire.questions.map((question) => {
            const newQuestion = <ListableQuestion key={uuidv4()} question={question} />;
            questions.push(newQuestion);
            return questions;
          });
        }
      }
    }

    return (
      <div className="create-question-view">
        { this.state.redirectToQuestionnaires &&
        <Redirect to="/my-questionnaires" />
        }
        {
          !this.props.activeQuestionnaire.id &&
          <div className="min-height">
            <Form id="creat-question-form">
              <div className="padding-tb-2">
                <Form.Group
                  className="center-content padding-b-1"
                  widths={2}
                  unstackable
                >
                  <Form.Input
                    className="center padding-b-1"
                    onChange={this.handleChange}
                    name="title"
                    value={this.state.title}
                    placeholder="Questionnaire Title"
                    required
                    type="text"
                    width={11}
                  />
                </Form.Group>
              </div>
            </Form>
            <Button
              basic
              className="pos-absolute-b-6-r-2"
              content="Create"
              floated="right"
              icon="arrow right"
              attached="bottom"
              labelPosition="right"
              onClick={this.createQuestionnaire}
            />
          </div>
        }


        {
          this.props.activeQuestionnaire.id &&
          <div>
            <h2>{this.state.title}</h2>
          </div>

        }
        {questions}
        {
          this.state.addingQuestion &&
          <CreateQuestion
            questionnaireId={this.props.activeQuestionnaire.id}
            countOfQuestions={
              this.props.activeQuestionnaire.questions[0]
              ? this.props.activeQuestionnaire.questions.length
              : 0}
            onSubmit={this.activeQuestion}
          />
        }

        {
          this.props.activeQuestionnaire.id && !this.state.addingQuestion &&
          <Button
            basic
            content="Add question"
            icon="plus"
            labelPosition="right"
            onClick={this.activeQuestion}
          />
        }
        {
          this.props.activeQuestionnaire.id &&
          <div className="margin-tb-1">
            <Button
              basic
              content="Done"
              attached="bottom"
              onClick={this.triggerRedirect}
            />
          </div>
        }
      </div>
    );
  }
}
