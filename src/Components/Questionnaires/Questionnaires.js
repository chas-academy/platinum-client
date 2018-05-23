import React, { Component } from 'react';
import { Accordion, Button } from 'semantic-ui-react';
import Questionnaire from '../../Redux/Containers/Polls/Questionnaire';
import uuidv1 from 'uuid/v1';

/* eslint-disable react/prop-types */

export default class Questionnaires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      page: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentWillMount() {
    const page = `page=${this.state.page}`;
    this.props.fetchQuestionnaires(page);
  }

  nextPage() {
    const page = `page=${this.state.page + 1}`;
    this.props.fetchQuestionnaires(page);
    this.handleAccordion(null, -1);
    this.setState({ page: this.state.page + 1 });
  }

  prevPage() {
    const page = `page=${this.state.page - 1}`;
    this.props.fetchQuestionnaires(page);
    this.handleAccordion(null, -1);
    this.setState({ page: this.state.page - 1 });
  }

  handleAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const myQuestionnaires = [];

    if (this.props.questionnaires[0]) {
      this.props.questionnaires.forEach((questionnaire, index) => {
        const myQuestionnaire = (
          <Questionnaire
            key={uuidv1()}
            questionnaire={questionnaire}
            handleAccordion={this.handleAccordion}
            activeIndex={activeIndex}
            index={index}
            page={this.state.page}
          />);
        myQuestionnaires.push(myQuestionnaire);
      });
    }

    return (
      <div className="width-100 center-content-column">
        <Accordion fluid>
          {myQuestionnaires}
        </Accordion>
        <div className="width-100">
          { this.state.page !== 1 &&
          <Button
            content="Previous"
            basic
            size="large"
            floated="left"
            onClick={this.prevPage}
            icon="arrow left"
            attached="bottom"
            labelPosition="left"
          />
        }

          { this.props.morePages &&
          <Button
            content="Next"
            basic
            size="large"
            floated="right"
            onClick={this.nextPage}
            icon="arrow right"
            attached="bottom"
            labelPosition="right"
          />
        }
        </div>
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
