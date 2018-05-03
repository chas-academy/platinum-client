import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
/* eslint-disable react/prop-types */

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: !!this.props.questionnaire.activePoll.status,
      redirectToResult: false,
      redirectToEdit: false,
      value: this.props.questionnaire.activePoll.link,
      copied: false,
    };

    this.togglePoll = this.togglePoll.bind(this);
    this.editQuestionnaire = this.editQuestionnaire.bind(this);
    this.viewResults = this.viewResults.bind(this);
  }

  togglePoll() {
    if (this.state.active) {
      this.props.closePoll(this.props.questionnaire.activePoll.id);
    } else {
      this.props.activatePoll(this.props.questionnaire.id);
    }
    setTimeout(this.props.fetchQuestionnaires, 50);
  }

  editQuestionnaire() {
    this.setState({
      redirectToEdit: true,
    });
  }

  viewResults() {
    this.setState({
      redirectToResult: true,
    });
  }

  render() {
    return (
      <div className="margin-tb-1 padding-05">
        {this.state.redirectToResult &&
        <Redirect to={`/polls/${this.props.questionnaire.activePoll.id}/result`} />
        }
        {this.state.redirectToEdit &&
        <Redirect to="/create-questionnaire" /> // todo create route for editing questionnaire reuse create-question form but with initial data
        }
        <Accordion.Title className="frame" active={this.props.activeIndex === this.props.index} index={this.props.index} onClick={this.props.handleAccordion}>
          <div className="space-between padding-05">
            <p>{this.props.questionnaire.title}</p>
            <Icon name={this.props.activeIndex === this.props.index ? 'minus' : 'plus'} />
          </div>
        </Accordion.Title>
        <Accordion.Content active={this.props.activeIndex === this.props.index}>
          <div className="center-content-column padding-1">
            <div className="center content-row">
              <button className="ui blue basic button" onClick={this.state.active ? this.viewResults : this.editQuestionnaire}> {this.state.active ? 'Live results' : 'Edit' }</button>
              <button className="ui orange basic button" onClick={this.togglePoll}>{ this.state.active ? 'End' : 'Activate' }</button>
            </div>
            { this.state.active &&
              <div className="center-content-column padding-1">
                <h3>Share Poll</h3>
                <div className="center-content-row">

                  <CopyToClipboard
                    text={this.state.value}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <button className="ui basic button yellow" >Link</button>
                  </CopyToClipboard>

                  <button className="ui basic button yellow" >QR-Code</button>
                </div>
                <div className="share__poll-link">
                  {this.state.copied ? <a href={this.state.value}>{this.state.value}</a> : null}
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
