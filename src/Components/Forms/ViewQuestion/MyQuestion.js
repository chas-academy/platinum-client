

import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class MyQuestion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <form class="ui-form">
      
<div class="ui vertical menu"></div>
    <div class="header item">Question</div>
  <div class="ui styled fluid accordion"></div>
    <div class="title">
      <i class="dropdown icon"></i>
     
    </div>
    <div class="content">
    </div>
    
    <div class="title">
      <i class="dropdown icon"></i>
     
    </div>
    <div class="content">
      
    </div>
    <div class="title active">
      <i class="dropdown icon"></i>
      
    </div>
    <div class="content active">
    </div>
    </form>
    );
  }
}