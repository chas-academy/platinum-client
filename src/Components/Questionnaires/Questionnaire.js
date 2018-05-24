import React, { Component } from 'react';
import { Accordion, Icon, Button, Header, Modal } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from '../Alert';
import QRCode from 'qrcode.react';
/* eslint-disable react/prop-types */

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: !!this.props.questionnaire.activePoll.status,
      delete: this.props.questionnaire,
      redirectToResult: false,
      redirectToEdit: false,
      value: this.props.questionnaire.activePoll.link,
      copied: false,
      modalOpen: false,
      hasQuestions: false,
      hasOptions: false,
      alertMessage: {
        type: 'info',
        message: 'Link copied to clipboard!',
      },
    };

    this.togglePoll = this.togglePoll.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.removeQuestionnaire = this.removeQuestionnaire.bind(this);
    this.editQuestionnaire = this.editQuestionnaire.bind(this);
    this.viewResults = this.viewResults.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
  componentWillMount() {
    if (this.props.questionnaire.questions[0]) {
      this.setState({
        hasQuestions: true,
      });

      if (this.props.questionnaire.questions[0].options[0]) {
        if (this.props.questionnaire.questions[0].options[0].name.length !== 0) {
          this.setState({
            hasOptions: true,
          });
        }
      }
    }
  }

  togglePoll() {
    if (this.state.active) {
      this.props.closePoll(this.props.questionnaire.activePoll.id);
    } else {
      this.props.activatePoll(this.props.questionnaire.id);
    }
  }

  handleClose() {
    this.setState({
      deleteModalOpen: false,
    });
  }

  removeQuestionnaire() {
    if (this.state.delete) {
      this.props.deleteQuestionnaire(this.props.questionnaire.id);
    }
    this.props.handleAccordion(null, -1);
  }

  editQuestionnaire() {
    this.props.fetchQuestionnaire(this.props.questionnaire.id);
    this.setState({
      redirectToEdit: true,
    });
  }

  viewResults() {
    this.setState({
      redirectToResult: true,
    });
  }

  handleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div className="margin-tb-1 padding-05">
        {this.state.redirectToResult &&
        <Redirect to={`/polls/${this.props.questionnaire.activePoll.id}/result`} />
        }
        {this.state.redirectToEdit &&
        <Redirect to={{
          pathname: '/create-questionnaire',
          state: { shouldNotReset: true },
        }}
        />
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
              <button
                className="ui blue basic button large"
                onClick={this.state.active ? this.viewResults : this.editQuestionnaire}
              > {this.state.active ? 'Live results' : 'Edit' }
              </button>
              { this.state.hasQuestions && this.state.hasOptions &&
                <button className="ui orange basic button large" onClick={this.togglePoll}>{ this.state.active ? 'End' : 'Activate' }</button>
              }

            </div>
            <div className="column padding-1">

              { this.state.delete && !this.state.active &&
              <Modal
                className="scrolling"
                trigger={<Button
                  className="ui black basic button large"

                >Delete
                         </Button>}
                open={this.state.deleteModalOpen}
                onClose={this.handleClose}
                basic
                size="small"
              >
                <Header icon="trash" content="DELETE QUESTIONNAIRE" />
                <Modal.Content>
                  <p>Are you sure you want to delete this questionnaire?</p>
                </Modal.Content>
                <Modal.Actions>
                  <Button basic color="red" inverted onClick={this.handleClose}>
                    <Icon name="remove" /> No
                  </Button>
                  <Button color="green" inverted onClick={this.removeQuestionnaire}>
                    <Icon name="checkmark" /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
              }
            </div>

            { this.state.active &&
            <div className="center-content-column padding-1">
              <h3>Share Poll</h3>
              <div className="center-content-row">
                <CopyToClipboard
                  text={this.state.value}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <button className="ui basic button yellow large" >Link</button>
                </CopyToClipboard>

                <Modal
                  className="scrolling"
                  trigger={<Button size="large" onClick={this.handleModal} className="ui basic button yellow" >QR-Code</Button>}
                  open={this.state.modalOpen}
                >
                  <Modal.Header>
                    Scan the QR-code with your smartphone!
                    <Icon onClick={this.handleModal} className="close icon" />
                  </Modal.Header>

                  <Modal.Content>
                    <div className="center-content-column" >
                      <QRCode size={1280} value={this.state.value} id="qr" />
                    </div>
                  </Modal.Content>

                </Modal>

              </div>
              <div className="share__poll-link margin-t-1">
                {this.state.copied && (
                <Alert type={this.state.alertMessage.type} >
                  <p>{this.state.alertMessage.message}</p>
                </Alert>
                  )}

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
