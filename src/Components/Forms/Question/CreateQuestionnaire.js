import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import CreateQuestion from '../../../Redux/Containers/Questionnaires/CreateQuestion';
import ListableQuestion from '../../../Redux/Containers/Questionnaires/ListableQuestion';
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
      countOfQuestions: 0,
      editingQuestionIndex: -1,
      editing: false,
      page: 1,

    };
    this.handleChange = this.handleChange.bind(this);
    this.activeQuestion = this.activeQuestion.bind(this);
    this.editingQuestion = this.editingQuestion.bind(this);
    this.createQuestionnaire = this.createQuestionnaire.bind(this);
    this.triggerRedirect = this.triggerRedirect.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateQuestionnaire = this.updateQuestionnaire.bind(this);
    this.setPage = this.setPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }
  componentWillMount() {
    if (this.props.location.pathname === '/create-questionnaire') {
      this.props.removeActiveQuestionnaire();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeQuestionnaire.questions) {
      if (nextProps.activeQuestionnaire.questions[0]) {
        if (isNumber(nextProps.activeQuestionnaire.questions[0].id)) {
          this.setState({
            countOfQuestions: nextProps.activeQuestionnaire.questions.length,
          });
        } else {
          this.setState({
            countOfQuestions: 0,
          });
        }
      } else {
        this.setState({
          countOfQuestions: 0,
        });
      }
    } else {
      this.setState({
        countOfQuestions: 0,
      });
    }
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (nextProps.location.pathname === '/create-questionnaire') {
        this.props.removeActiveQuestionnaire();
      }
    }
  }
  setPage(page) {
    this.setState({ page });
  }

  nextPage() {
    this.props.fetchQuestionnaire(this.props.activeQuestionnaire.id, this.state.page + 1);
    this.setPage(this.state.page + 1);
  }

  prevPage() {
    this.props.fetchQuestionnaire(this.props.activeQuestionnaire.id, this.state.page - 1);
    this.setPage(this.state.page - 1);
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
  editingQuestion(index) {
    const newIndex = this.state.editingQuestionIndex === index ? -1 : index;

    this.setState({ editingQuestionIndex: newIndex });
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }
  triggerRedirect() {
    this.setState({
      redirectToQuestionnaires: true,
    });
  }
  toggleEdit() {
    this.setState({
      editing: !this.state.editing,
      title: this.props.activeQuestionnaire.title,
    });
  }

  updateQuestionnaire() {
    const data = {
      title: this.state.title,
    };
    this.props.updateQuestionnaire(this.props.activeQuestionnaire.id, data, this.state.page);
    this.toggleEdit();
  }

  render() {
    const questions = [];

    if (this.props.activeQuestionnaire.questions) {
      if (this.props.activeQuestionnaire.questions[0]) {
        if (isNumber(this.props.activeQuestionnaire.questions[0].id)) {
          this.props.activeQuestionnaire.questions.map((question, index) => {
            const newQuestion = (
              <ListableQuestion
                key={uuidv4()}
                question={question}
                index={index}
                activeIndex={this.state.editingQuestionIndex}
                editingQuestion={this.editingQuestion}
                editingQuestionnaire={this.state.editing}
                page={this.state.page}
                setPage={this.setPage}
              />);
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
            <Form id="creat-question-form" size="large">
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
                    placeholder="Questionnaire"
                    label="Title"
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
              size="large"
              attached="bottom"
              labelPosition="right"
              onClick={this.createQuestionnaire}
            />
          </div>
        }


        {
          this.props.activeQuestionnaire.id && !this.state.editing &&
          <div className="width-100 center-content">
            <div className="width-35 mobile-width">
              <div className="width-100 center-content-row mobile-center-content-column">
                <h2 className="margin-tb-1 page-title max-width-3-of-4 mobile-max-width-100">{this.props.activeQuestionnaire.title}</h2>
                <Button
                  basic
                  color="blue"
                  size="large"
                  content="Edit"
                  onClick={this.toggleEdit}
                />
              </div>
              <h3 className="font-wight-n">Questions: </h3>
            </div>
          </div>

        }
        {
          this.state.editing &&
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
                    label="Title"
                    type="text"
                    width={11}
                  />
                </Form.Group>
              </div>
            </Form>
            <Button
              basic
              size="large"
              content="Update"
              attached="bottom"
              onClick={this.updateQuestionnaire}
            />
          </div>

        }
        {questions}
        {
          this.state.addingQuestion &&
          <CreateQuestion
            questionnaireId={this.props.activeQuestionnaire.id}
            countOfQuestions={this.state.countOfQuestions}
            onSubmit={this.activeQuestion}
            page={this.state.page}
          />
        }
        {
          this.props.activeQuestionnaire.id &&
          !this.state.addingQuestion &&
          this.state.editingQuestionIndex === -1 &&
          !this.state.editing &&
          <Button
            basic
            size="large"
            content="Add question"
            icon="plus"
            labelPosition="right"
            onClick={this.activeQuestion}
          />
        }
        <div className="width-100 margin-tb-1">
          {
             this.state.page !== 1 &&
             !this.state.addingQuestion &&
             this.state.editingQuestionIndex === -1 &&
             !this.state.editing &&
             <Button
               content="Previous"
               basic
               size="large"
               floated="left"
               onClick={this.prevPage}
               icon="arrow left"
               labelPosition="left"
             />
          }

          {
           this.props.morePages &&
           !this.state.addingQuestion &&
           this.state.editingQuestionIndex === -1 &&
           !this.state.editing &&
           <Button
             content="Next"
             basic
             size="large"
             floated="right"
             onClick={this.nextPage}
             icon="arrow right"
             labelPosition="right"
           />
          }
        </div>
        {
          this.props.activeQuestionnaire.id &&
          !this.state.addingQuestion &&
          this.state.editingQuestionIndex === -1 &&
          !this.state.editing &&

          <div className="margin-tb-5">
            <Button
              basic
              size="large"
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
