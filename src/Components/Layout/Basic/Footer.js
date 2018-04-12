import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, List } from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div class="ui center aligned stackable grid">
                <div class="four column row">
                    <div class="left floated column">
                        <b>PLATINUM</b>
                    </div>
                    <div class="center floated column">
                        <Icon circular name='large facebook square' />
                        <Icon circular name='large twitter square' />
                        <Icon circular name='large slack' />
                        <Icon circular name='large instagram' />
                    </div>
                    <div class="right floated column">
                        <List>
                            <List.Item icon='marker' content='Elektravägen 29' />
                            <List.Item icon='mail' content={<a href='mailto:mail@mail.com'>mail@mail.com</a>} />
                            <List.Item icon='phone' content='070-000 00 00'/>
                        </List>
                    </div>
                </div>
            </div> 
        </footer>



    )
  }
}
