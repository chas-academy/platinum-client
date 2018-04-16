import React from 'react';
import GetStarted from '../../Components/Buttons/GetStarted'

import { Header, Table, Icon } from 'semantic-ui-react'

const Pricing = () => (
  <div className='ui center aligned basic segment'>

    <h2 className='headline'>Pricing</h2>

  <Table celled padded unstackable>
  
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine></Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Free</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>One day $3</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Pro $6.99/m</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>Create poll</Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>
    
    
      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>Share poll</Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
      </Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h3' textAlign='center'>Multiple polls</Header>
        </Table.Cell>
        <Table.Cell singleLine></Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
      </Table.Row>
      
    </Table.Body>

  </Table>

  <GetStarted />
  
  </div>
)

export default Pricing
