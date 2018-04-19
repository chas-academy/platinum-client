import React, { Component } from 'react'

export default class Poll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }

    this.togglePoll = this.togglePoll.bind(this)
  }

  togglePoll() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return(
        <div  >
            <button class="ui blue basic button"  >Edit</button>
            <button class="ui orange basic button"  onClick={this.togglePoll}>Activate</button>

            <button class="ui orange basic button"   >Live results</button>
            
            { this.state.active &&
            <div>
                <h3>Share Poll</h3>
                <button class="ui basic button yellow" >Link</button>
                <button class="ui basic button yellow"  >QR-Code</button>
            </div>
            }
            
        </div>
    );
  }
}
