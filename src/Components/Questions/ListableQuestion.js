import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import CreateQuestion from '../../Redux/Containers/Questionnaires/CreateQuestion';
/* eslint-disable */
export default class  ListableQuestion extends Component {

  constructor(props){
    super(props);
    this.toggleEditQuestion = this.toggleEditQuestion.bind(this);
    this.state ={
      isBeingEdited: false,
    }
  }
  
  toggleEditQuestion(){
    this.setState({
      isBeingEdited: !this.state.isBeingEdited,
    })
  }
  render() {
    return (
    
      <div className="margin-tb-1">
        { !this.state.isBeingEdited &&
        <div>
        <h3>{this.props.question.name}</h3>
        <Button basic content="edit" onClick={this.toggleEditQuestion} />
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
