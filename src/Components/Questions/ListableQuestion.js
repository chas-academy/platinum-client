import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import CreateQuestion from '../../Redux/Containers/Questionnaires/CreateQuestion';
/* eslint-disable */
export default class  ListableQuestion extends Component {

  constructor(props){
    super(props);
    
    this.state ={
      isBeingEdited: false,
      delete: this.props.question,
    };
    
    this.toggleEditQuestion = this.toggleEditQuestion.bind(this);
    this.toggleDeleteQuestion = this.toggleDeleteQuestion.bind(this);
  }
  
  toggleEditQuestion(){
    this.setState({
      isBeingEdited: !this.state.isBeingEdited,
    })
  }

  toggleDeleteQuestion() {
    if (this.state.delete) {
      this.props.deleteQuestion(this.props.question.id);
      console.log(this.props.question.id);
    }
  }

  render() {
    return (
    
      <div className="margin-tb-1">
        { !this.state.isBeingEdited &&
        <div>
        <h3>{this.props.question.name}</h3>
        <Button basic content="Edit" onClick={this.toggleEditQuestion} />
        <Button basic color="red" content="Delete" onClick={this.toggleDeleteQuestion} />
        </div>
        }
        { this.state.isBeingEdited &&
        <div>
          <CreateQuestion question={this.props.question} onSubmit={this.toggleEditQuestion}/>
        </div>
        }
      </div>
      
    )
  }
}
