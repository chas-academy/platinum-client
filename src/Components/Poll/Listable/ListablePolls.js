import React, { Component } from 'react';
import ListablePoll from '../../../Redux/Containers/Polls/ListablePoll';
import { Accordion, Button } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';
/* eslint-disable react/prop-types */
export default class ListablePolls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1,
      page: 1,
    };
    this.setPage = this.setPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }
  componentWillMount() {
    this.props.fetchPolls(this.state.page);
  }

  setPage(page) {
    this.setState({ page });
  }

  nextPage() {
    this.props.fetchPolls(this.state.page + 1);
    this.handleAccordion(null, -1);
    this.setPage(this.state.page + 1);
  }

  prevPage() {
    this.props.fetchPolls(this.state.page - 1);
    this.handleAccordion(null, -1);
    this.setPage(this.state.page - 1);
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
            page={this.state.page}
            setPage={this.setPage}
          />);
        myPolls.push(myPoll);
      });
    }
    return (
      <div className="width-100 center-content-column">
        <Accordion fluid>
          {myPolls}
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
