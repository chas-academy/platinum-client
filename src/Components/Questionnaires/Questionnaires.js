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
      questionnaires:
      [
        { id: 1, title: 'Exempel 1', activePolls: { id: 'fe280cbf-bdc7-42b3-8524-3f3945f95d0c' } },
        { id: 2, title: 'Exempel 2', activePolls: [] },

      ], // will be replaced with data fetched from api
    };
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

    this.state.questionnaires.forEach((questionnaire, index) => {
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

    return (
      <Accordion fluid>
        {myQuestionnaires}
      </Accordion>

    );
  }
}

/* eslint-enable react/prop-types */
