import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types */
export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      redirectToQuestionnaires: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.createQuestionnaire = this.createQuestionnaire.bind(this);
  }

  createQuestionnaire() {
    const data = {
      title: this.state.title,
      type: 'premium',
    };

    this.props.createQuestionnaire(data);
  }
  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.props);
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
            <Button
              basic
              content="Add question"
              icon="plus"
              labelPosition="right"
            />
          </div>
        }
      </div>
    );
  }
}
