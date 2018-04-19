

import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Poll from '../../Components/Poll';

export default class MyQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0, 
    }
  }
  

  handleAccordion = (e, titleProps) => {
    console.log(e.target);
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
   
            <Accordion fluid styled className="center-content-column" >
        
            <Accordion.Title  className="center-content-row" active={activeIndex === 0} index={0} onClick={this.handleAccordion}>
                <Icon name='dropdown' />
                  Do you like dogs?
                </Accordion.Title>
                <Accordion.Content  active={activeIndex === 0}>
                <Poll className="center-content" />
                </Accordion.Content>
        
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleAccordion}>
                  <Icon name='dropdown' />
                  Superman or Batman?
                      </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                        <Poll className ="center-content" />
                          </Accordion.Content>

               <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleAccordion}>
                    <Icon name='dropdown' />
                     Trump or Obama?
                          </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                        <Poll className ="center-content" />
                        </Accordion.Content>
                       </Accordion>
                        

          
  );

  }
}