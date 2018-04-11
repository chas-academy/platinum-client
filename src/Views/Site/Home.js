import React, { Component } from 'react'
import ReactLogo from '../../Assets/Images/react-logo.svg'
import { PageTitle } from '../../Lib/Common/Views'
import { Header, Button} from 'semantic-ui-react'

export default class Home extends Component {
    render() {
        return (
            <div className="home-view">
                <Header as='h1'>PLATINUM</Header>

                <div class="ui  two column centered grid">
                    <div class="four column centered row">    
                        <div class="column middle aligned olive">
                            <Button inverted color='pink'>LOG IN</Button>
                        </div>
                        <div class="column middle aligned black">
                            <Button inverted color='pink'>REGISTER</Button>
                        </div>
                    </div>
                    <div class="two column middle aligned red">
                        <Button inverted color='pink'>WHAT WE DO</Button>
                    </div>
                </div>
            </div>
        )
    }
}
