import React, { Component } from 'react';
import ListablePoll from '../../../Redux/Containers/Polls/ListablePoll';
import { Accordion } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types */
export default class ListablePolls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
    };
  }
  componentWillMount() {
    this.props.fetchPolls();
  }
  handleAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;
    const myPolls = [];
    if (this.props.polls[0]) {
      this.props.polls.forEach((Poll, index) => {
        const myPoll = (
          <ListablePoll
            key={uuidv4()}
            poll={Poll}
            handleAccordion={this.handleAccordion}
            activeIndex={activeIndex}
            index={index}
          />);
        myPolls.push(myPoll);
      });
    }
    return (
      <div >
        <Accordion fluid>
          {myPolls}
        </Accordion>
      </div>
    );
  }
}
