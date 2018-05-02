import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react';
import Questionnaire from '../../Redux/Containers/Polls/Questionnaire';
import uuidv1 from 'uuid/v1';

/* eslint-disable react/prop-types */

export default class Questionnaires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    };
  }

  componentWillMount() {
    this.props.fetchQuestionnaires();
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
          />);
        myQuestionnaires.push(myQuestionnaire);
      });
    }

    return (
      <Accordion fluid>
        {myQuestionnaires}
      </Accordion>

    );
  }
}

/* eslint-enable react/prop-types */
