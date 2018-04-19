import React, { Component } from "react";
import GetStarted from '../../Components/Buttons/GetStarted'
import { Message } from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
    	<div className='ui center aligned basic segment'>
    		
    		<h2 className='headline'>About us</h2>

	    		<Message className='aboutbox'>
	    			Which mood are you in today?
					Fun or serious? Don’t worry you don’t have to choose -  because you can use this app  just for fun or also in some  serious business. Great huh?!

					Just click the button and you 
					are ready to create your first
					poll for free which you can 
					share with whoever! It’s super
					easy, we promise. And fun too!
	    		</Message>

    		<GetStarted />

    	</div>
    );
  }
}