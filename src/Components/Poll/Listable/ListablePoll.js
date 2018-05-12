import React, { Component } from 'react';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types */

export default class ListablePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToResult: false,
    };

    this.viewResults = this.viewResults.bind(this);
    this.deletePoll = this.deletePoll.bind(this);
  }
  viewResults() {
    this.setState({
      redirectToResult: true,
    });
  }
  deletePoll() {
    this.props.deletePoll(this.props.poll.id);
    setTimeout(() => { this.props.fetchPolls(); }, 25);
  }
  render() {
    return (
      <div className="margin-tb-1 padding-05 min-width-250">
        {this.state.redirectToResult &&
        <Redirect to={`/polls/${this.props.poll.id}/result`} />
        }
        <Accordion.Title className="frame" active={this.props.activeIndex === this.props.index} index={this.props.index} onClick={this.props.handleAccordion}>
          <div className="space-between padding-05">
            <p>{this.props.poll.closedAt.substring(0, 10)}</p>
            <Icon name={this.props.activeIndex === this.props.index ? 'minus' : 'plus'} />
          </div>
        </Accordion.Title>
        <Accordion.Content active={this.props.activeIndex === this.props.index}>
          <div className="center-content-column padding-1">
            <div className="center content-row">
              <Button basic onClick={this.viewResults} content="View Result" />
              <Button basic onClick={this.deletePoll} content="Delete" />
            </div>
          </div>
        </Accordion.Content>
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
