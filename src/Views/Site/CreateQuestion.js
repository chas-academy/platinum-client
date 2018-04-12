import React, { Component } from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {Link } from 'react-router-dom'

export default class CreateQuestion extends Component {
  state = {question: '', option1: '', option2: ''}
 
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
    const { question, option1, option2 } = this.state
    return (
    <div className="create-question-view">
      <Form >
        <div class="center-content-column pd-bt-2">
          <Form.Input className="center" onChange={this.handleChange} name="question" value={question} small placeholder="Question" required type="text" width={8}/>
          <Form.Input  onChange={this.handleChange}  name="option1" value={option1} small placeholder="Option" required type="text" width={8}/>
          <Form.Input  onChange={this.handleChange}  name="option2" value={option2} small placeholder="Option" required type="text" width={8}/>
        </div>
        <Button basic content="add option" icon="plus" labelPosition="left"/>
      </Form>
      <Button basic content="NEXT" floated="right" icon="arrow right" labelPosition="right" />
    </div>
    )
  }
}
