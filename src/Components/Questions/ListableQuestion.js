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
      this.props.deleteQuestion(this.props.question.id, this.props.question.questionnaireId, 1);
      this.props.setPage(1);
    }
  }

  handleClose() {
    this.setState({
      deleteModalOpen: false,
    });
  }

  render() {
    return (
      <div className="margin-tb-1 center-content">
        { !this.state.isBeingEdited &&
        <div className="width-100 center-content">
          <div className="width-35 mobile-width">
            <div className="width-100 frame center-content-row padding-1 mobile-center-content-column">
              <h3 className="font-wight-n max-width-half mobile-max-width-100">{this.props.question.name}</h3>
              <div className="mobile-space-around">
                <Button className="margin-tb-1 margin-r-1 button-opacity" size="large" color="blue" content="Edit" onClick={this.toggleEditQuestion} disabled={this.props.editingQuestionnaire} />
             
              {this.state.delete &&
              <Modal
              className="scrolling"
              trigger={ 
                <Button
                size="large"
                className="ui red button margin-tb-1 button-opacity"
                disabled={this.props.editingQuestionnaire}
                content="Delete"
                />
              }
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
                  <Button size="large" basic color="red" inverted onClick={this.handleClose}>
                    <Icon name="remove" /> No
                  </Button>
                  <Button size="large" color="green" inverted onClick={this.toggleDeleteQuestion}>
                    <Icon name="checkmark" /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
              }
              </div>
            </div>
          </div>
        </div>
        }
        { this.state.isBeingEdited &&
        <div className="width-100">
          <CreateQuestion question={this.props.question} onSubmit={this.toggleEditQuestion} page={this.props.page}/>
        </div>
        }
      
      </div>
      
    )
  }
}
