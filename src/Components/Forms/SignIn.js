import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Form from 'react-jsonschema-form';
import Alert from '../Alert';
import * as FormHelper from '../../Lib/Helpers/Form';
import * as Session from '../../Lib/Helpers/Session';
import { Button } from 'semantic-ui-react';

/* eslint-disable react/prop-types, consistent-return,
no-return-assign */
const initFormData = {
  email: '',
  password: '',
};

const Schema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      title: 'Email',
    },
    password: {
      type: 'string',
      title: 'Password',
    },
  },
};

const UISchema = {
  'ui:rootFieldId': 'log_in',
  email: {
    'ui:widget': 'email',
    'ui:autofocus': true,
    'ui:placeholder': 'Enter your email',
  },
  password: {
    'ui:widget': 'password',
    'ui:placeholder': 'Enter your password',
  },
};

function validate(formData, errors) {
  let input;

  if (formData.email === undefined || formData.email === '') {
    errors.email.addError('Email is required.');
    input = 'email';
  }

  if (formData.password === undefined || formData.password === '') {
    errors.password.addError('Password is required.');
    input = input || 'password';
  }

  FormHelper.setFocus(UISchema, input);

  return errors;
}

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: Date.now(),
      formData: initFormData,
      alertMessage: {},
      showAlertMessage: false,
      isSigningIn: false,
      redirect: '/',
      locationState: props.location.state,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.checkIfSignedIn = this.checkIfSignedIn.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isSigningIn !== nextProps.isSigningIn
      && !nextProps.isSigningIn && nextProps.redirect) {
      this.checkIfSignedIn();
    }
  }
  onSubmit({ formData }) {
    this.setState({
      key: Date.now(),
      formData,
      alertMessage: {
        type: 'info',
        message: 'Signing in...',
      },
      isSigningIn: true,
      showAlertMessage: true,
    });
    this.props.loginUser(formData);
  }
  checkIfSignedIn() {
    if (Session.isSignedIn) {
      this.setState({
        alertMessage: {
          type: 'success',
          message: 'Redirecting...',
        },
        redirect: this.props.redirect.to || this.state.redirect,
      });
      if (
        !this.state.locationState &&
        this.props.redirect.to &&
        this.props.redirect.to.indexOf('http') === 0
      ) {
        return (window.location.href = this.props.redirect.to);
      }

      setTimeout(() => {
        this.setState({
          formData: initFormData,
          isSigningIn: false,
        });
        this.props.auth(true);
      }, 500);
    } else {
      const message =
      'Unable to process your request. Please check your internet connection. If problem persists, contact support.';

      this.setState({
        alertMessage: {
          type: 'danger',
          message,
        },
        showAlertMessage: true,
        isSigningIn: false,
      });
    }
  }

  render() {
    if (Session.token() && this.props.isSignedIn) {
      const { locationState } = this.state;
      let referrer = this.state.redirect;

      if (locationState && locationState.from) {
        const { pathname, search } = locationState.from;
        referrer = [pathname, search].join('');
      }

      return <Redirect to={referrer} />;
    }

    return (
      <div className="form-wrapper">
        {this.state.showAlertMessage && (
          <Alert type={this.state.alertMessage.type} hideDismissButton>
            <p>{this.state.alertMessage.message}</p>
          </Alert>
        )}
        <Form
          className="form"
          autocomplete="off"
          key={this.state.key}
          formData={this.state.formData}
          schema={Schema}
          uiSchema={UISchema}
          validate={validate}
          ErrorList={FormHelper.errorList}
          onSubmit={this.onSubmit}
        >

          <Button
            className="button__signin"
            basic
            color="orange"
            content="SIGN IN"
            type="submit"
            disabled={this.state.isSigningIn}
          />

          <Link className="sign__up-link" to="/sign-up">Not a member? Click here!</Link>

        </Form>
      </div>
    );
  }
}

/* eslint-enable no-console, no-use-before-define, react/prop-types, consistent-return,
no-shadow, no-return-assign, no-underscore-dangle, prefer-destructuring */
