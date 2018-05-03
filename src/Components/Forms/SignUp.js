import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import Alert from '../Alert';
import * as FormHelper from '../../Lib/Helpers/Form';
import { Button } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
/* eslint-disable react/prop-types */
const initFormData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      title: 'First Name',
    },
    lastName: {
      type: 'string',
      title: 'Last Name',
    },
    email: {
      type: 'string',
      title: 'Email',
    },
    password: {
      type: 'string',
      title: 'Password',
    },
    confirmPassword: {
      type: 'string',
      title: 'Confirm Password',
    },
  },
};

const UISchema = {
  'ui:rootFieldId': 'log_in',
  firstName: {
    'ui:autofocus': true,
    'ui:placeholder': 'What is your first name?',
  },
  lastName: {
    'ui:placeholder': 'And your last name?',
  },
  email: {
    'ui:widget': 'email',
    'ui:placeholder': 'Enter your email',
  },
  password: {
    'ui:widget': 'password',
    'ui:placeholder': 'Password',
  },
  confirmPassword: {
    'ui:widget': 'password',
    'ui:placeholder': 'Confirm your password',
  },
};

function validate(formData, errors) {
  let input;

  if (formData.firstName === undefined || formData.firstName === '') {
    errors.firstName.addError('First name is required');
    input = 'firstName';
  }

  if (formData.lastName === undefined || formData.lastName === '') {
    errors.lastName.addError('Last name is required');
    input = 'lastName';
  }

  if (formData.email === undefined || formData.email === '') {
    errors.email.addError('Email is required.');
    input = 'email';
  }

  if (formData.password === undefined || formData.password === '') {
    errors.password.addError('Password is required.');
    input = input || 'password';
  }

  if (formData.confirmPassword === undefined || formData.confirmPassword === '' ||
      formData.confirmPassword !== formData.password) {
    errors.confirmPassword.addError('Confirm your password...');
    input = input || 'password';
  }
  FormHelper.setFocus(UISchema, input);

  return errors;
}
export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: Date.now(),
      formData: initFormData,
      alertMessage: {},
      showAlertMessage: false,
      isSigningUp: false,
      redirectToSignIn: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.triggerRedirect = this.triggerRedirect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.isRegistering && !nextProps.isRegistering) {
      if (nextProps.isRegistered) {
        this.setState({
          alertMessage: {
            type: 'info',
            message: 'You are now Registered!',
          },
        });
        setTimeout(this.triggerRedirect, 1500);
      } else {
        this.setState({
          alertMessage: {
            type: 'info',
            message: 'Some thing when wrong, please try again',
            isSigningUp: false,
          },
        });
      }
    }
    return true;
  }

  onSubmit({ formData }) {
    this.setState({
      key: Date.now(),
      formData,
      alertMessage: {
        type: 'info',
        message: 'Signing up...',
      },
      showAlertMessage: true,
      isSigningUp: true,
    });

    const user = {
      ...formData,
      role: 'Premium',
      redirect: '/',
      status: 'Active',
      allowedPaths: ['/my-questionnaires', '/create-questionnaire'],
      excludedPaths: [],
    };

    this.props.registerUser(user);
  }

  triggerRedirect() {
    this.setState({ redirectToSignIn: true });
  }

  render() {
    return (
      <div className="form-wrapper">
        {this.state.redirectToSignIn &&
          <Redirect to="/sign-in" />
        }
        {this.state.showAlertMessage &&
          <Alert type={this.state.alertMessage.type} hideDismissButton>
            <p>{this.state.alertMessage.message}</p>
          </Alert>
        }
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
            className="button__signup"
            basic
            color="orange"
            content="SIGN UP"
            type="submit"
            disabled={this.state.isSigningUp}
          />

          <Link className="sign__in-link"to="/sign-in">Already a member? Click here!</Link>
        </Form>
      </div>
    );
  }
}

