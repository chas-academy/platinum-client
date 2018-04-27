import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

/* eslint-disable react/prop-types */

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      pollId: null,

    };

    this.togglePoll = this.togglePoll.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.polls.activePolls !== this.props.polls.activePolls) {
      this.setState({
        pollId: nextProps.polls.activePolls.get('id'),
      });
    }
  }
  togglePoll() {
    if (this.state.active) {
      this.props.closePoll(this.state.pollId);
    } else {
      this.props.activatePoll(this.props.questionnaire.id);
    }
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className="margin-tb-1 padding-05">
        <Accordion.Title className="frame" active={this.props.activeIndex === this.props.index} index={this.props.index} onClick={this.props.handleAccordion}>
          <div className="space-between padding-05">
            <p>{this.props.questionnaire.title}</p>
            <Icon name={this.props.activeIndex === this.props.index ? 'minus' : 'plus'} />
          </div>
        </Accordion.Title>
        <Accordion.Content active={this.props.activeIndex === this.props.index}>
          <div className="center-content-column padding-1">
            <div className="center content-row">
              <button className="ui blue basic button"> {this.state.active ? 'Live results' : 'Edit' }</button>
              <button className="ui orange basic button" onClick={this.togglePoll}>{ this.state.active ? 'End' : 'Activate' }</button>
            </div>
            { this.state.active &&
              <div className="center-content-column padding-1">
                <h3>Share Poll</h3>
                <div className="center-content-row">
                  <button className="ui basic button yellow" >Link</button>
                  <button className="ui basic button yellow" >QR-Code</button>
                </div>
              </div>
              }
          </div>
        </Accordion.Content>
      </div>
    );
  }
}

/* eslint-enable react/prop-types */
