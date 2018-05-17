import React, { Component } from 'react';
import { Icon, Button, Header, Modal } from 'semantic-ui-react';
import CreateQuestion from '../../Redux/Containers/Questionnaires/CreateQuestion';
/* eslint-disable */
export default class  ListableQuestion extends Component {

  constructor(props){
    super(props);
    
    this.state ={
      isBeingEdited: false,
      delete: this.props.question,
    };

    this.handleClose = this.handleClose.bind(this);
    this.toggleEditQuestion = this.toggleEditQuestion.bind(this);
    this.toggleDeleteQuestion = this.toggleDeleteQuestion.bind(this);
  }
  componentWillMount(){
    if(this.props.activeIndex === this.props.index) {
      this.setState({
        isBeingEdited:true,
      })
    }
  }
  
  toggleEditQuestion(){
    this.setState({
      isBeingEdited: !this.state.isBeingEdited,
    });
    this.props.editingQuestion(this.props.index);
  }

  toggleDeleteQuestion() {
    if (this.state.delete) {
      this.props.deleteQuestion(this.props.question.id);
    }
    setTimeout(() => {this.props.fetchQuestionnaire(this.props.question.questionnaireId)}, 50);
  }

  handleClose() {
    this.setState({
      deleteModalOpen: false,
    });
  }

  render() {
    console.log('test');
    console.log(this.state.isBeingEdited);
    return (
    
      <div className="margin-tb-1">
        { !this.state.isBeingEdited &&
        <div>
        <h3>{this.props.question.name}</h3>
        <Button basic color="blue" content="Edit" onClick={this.toggleEditQuestion} />
        {this.state.delete &&
        <Modal
        className="scrolling"
        trigger={<Button
          className="ui red basic button"
      
        >Delete
                 </Button>}
        open={this.state.deleteModalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="trash" content="DELETE QUESTION" />
        <Modal.Content>
          <p>If you delete this question all of the content and data will be deleted forever!</p>

        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={this.handleClose}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={this.toggleDeleteQuestion}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
        }
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
