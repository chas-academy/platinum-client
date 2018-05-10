import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import CreateQuestion from '../../Redux/Containers/Questionnaires/CreateQuestion';
/* eslint-disable */
export default class  ListableQuestion extends Component {

  constructor(props){
    super(props);
    this.editQuestion = this.editQuestion.bind(this);
    this.state ={
      isBeingEdited: false,
    }
  }

  editQuestion(){
    this.setState({
      isBeingEdited: true,
    })
  }
  render() {
    return (
    
      <div className="margin-tb-1">
        { !this.state.isBeingEdited &&
        <div>
        <h3>{this.props.question.name}</h3>
        <Button basic content="edit" onClick={this.editQuestion} />
        </div>
        }
        { this.state.isBeingEdited &&
        <div>
          <CreateQuestion question={this.props.question}/>
        </div>
        }
      </div>
      
    )
  }
}
