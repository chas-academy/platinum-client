import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

export default class CreateQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '', 
      option1: '',
      option2: '',
      optionCount: 2
    }
    this.addOption = this.addOption.bind(this);
  }
  
 
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  addOption = () => {
    this.setState({
     [`option${this.state.optionCount + 1}`]: '',
     optionCount: this.state.optionCount + 1
    })

  }

  render() {
    const options = [];

    for(let i = 1; i <= this.state.optionCount; i++) {
      let option = <Form.Input  onChange={this.handleChange}  name={`option${i}`} value={this.state[`option${i}`]} small placeholder="Option" required type="text" width={8}/>
      options.push(option)
    }
    
    return (
    <div className="create-question-view">
      <Form id="creat-question-form">
        <div className="center-content-column pd-bt-2">
          <Form.Input className="center" onChange={this.handleChange} name="question" value={this.state.question} small placeholder="Question" required type="text" width={8}/>
          {options}
        </div>
      </Form>
      <Button basic content="add option" icon="plus" labelPosition="left" onClick={this.addOption}/>
      <Button basic content="NEXT" floated="right" icon="arrow right" labelPosition="right"/>
      
      
      
    </div>
    )
  }
}
