import React, { Component } from 'react';
import { Header, Table, Icon } from 'semantic-ui-react';

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smalscreenprops: false,
    };
  }
  componentWillMount() {
    if (window.innerWidth < 350) {
      this.setState({
        smalscreenprops: true,
      });
    }
  }

  render() {
    return (

      <Table celled padded compact={this.state.smalscreenprops} unstackable className="table opacity">

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine />
            <Table.HeaderCell textAlign="center">Free</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">One day $3</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Pro $6.99/m</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          <Table.Row>
            <Table.Cell>
              <Header as="h3" textAlign="center">Create poll</Header>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.Cell>
              <Header as="h3" textAlign="center">Share poll</Header>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>

          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h3" textAlign="center">Multiple polls</Header>
            </Table.Cell>
            <Table.Cell singleLine />
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon color="green" name="checkmark" size="large" />
            </Table.Cell>
          </Table.Row>

        </Table.Body>

      </Table>
    );
  }
}

export default Pricing;
