

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

      <Accordion className="center-content-column">
        <div className="">
        <Accordion.Title  className="center-content-row" active={activeIndex === 0} index={0} onClick={this.handleAccordion}>
          <Icon name='dropdown' />
          Do you like dogs?
        </Accordion.Title>
        <Accordion.Content  active={activeIndex === 0}>
         <Poll className="center-content" />
        </Accordion.Content>
        </div>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleAccordion}>
          <Icon name='dropdown' />
          Poll 2
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
            {' '}dog that they find to be compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleAccordion}>
          <Icon name='dropdown' />
          Poll 3
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
            {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
            {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}