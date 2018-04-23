import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Option from './Option/CreateOption';
import uuidv1 from 'uuid/v1';

export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      options: [
        <Form.Group
          key={uuidv1()}
          className="center-content padding-b-1"
          unstackable
          widths={2}
        >
          <Option name="option1" width={11} />
        </Form.Group>,
        <Form.Group
          key={uuidv1()}
          className="center-content padding-b-1"
          unstackable
          widths={2}
        >
          <Option name="option2" width={11} />
        </Form.Group>,
      ],
    };
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  addOption() {
    this.setState({
      options: [
        ...this.state.options,
        <Form.Group
          className="center-content padding-b-1"
          key={uuidv1()}
          unstackable
          widths={2}
        >
          <Option name={`option${this.state.options.length + 1}`} width={10} />
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
      <div className="create-question-view">
        <div className="min-height">
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
          className="pos-absolute-b-6-r-2"
          content="NEXT"
          floated="right"
          icon="arrow right"
          attached="bottom"
          labelPosition="right"
        />
      </div>
    );
  }
}
