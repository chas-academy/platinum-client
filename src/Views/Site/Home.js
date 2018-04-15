import React, { Component } from 'react'
import { Header, Button} from 'semantic-ui-react'

export default class Home extends Component {
    render() {
        return (
            <div className="home-view">
                <Header as='h1'>PLATINUM</Header>

                <div className="ui two column centered grid stackable columns">
                    <div className="four column centered row">    
                        <div className="column middle aligned">
                            <Button fluid inverted color='orange'>LOG IN</Button>
                        </div>
                        <div className="column middle aligned">
                            <Button fluid inverted color='red'>REGISTER</Button>
                        </div>
                    </div>
                    <div className="two column middle aligned">
                        <Button fluid inverted color="pink">WHAT WE DO</Button>
                    </div>
                </div>
            </div>
        )
    }
}
