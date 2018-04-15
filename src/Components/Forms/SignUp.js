import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class SignUpForm extends Component {
    
    render() {
        return (
            <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' />
            </Form.Field>

            <Button type='submit'>SIGN UP</Button>
          </Form>
        );
    }
}