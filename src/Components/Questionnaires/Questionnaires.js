import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Questionnaire from './Questionnaire';
import uuidv1 from "uuid/v1";

export default class Questionnaires extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      questionnaires:
      [
        {title: 'Exempel 1'},
        {title: 'Exempel 2'},
        {title: 'Exempel 3'},

      ]
    }
  }
  

  handleAccordion = (e, titleProps) => {
    console.log(e.target);
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const myQuestionnaires = [];

      this.state.questionnaires.forEach((questionnaire, index)=> {
        let myQuestionnaire =  <Questionnaire key={uuidv1()} questionnaire={questionnaire} handleAccordion={this.handleAccordion} activeIndex={activeIndex} index={index}/>
        myQuestionnaires.push(myQuestionnaire);
    });

    return (
     
      <Accordion  fluid>
        {myQuestionnaires}
      </Accordion>
                     
          
  );

  }
}