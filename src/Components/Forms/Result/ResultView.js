
import React, { Component } from 'react'
import {Container, Header} from 'semantic-ui-react'

class ResultView extends React.Component{

constructor(props){

    super(props)

    this.state ={
        active: false
    }
}
render(){
    return(
        <div className="margin-tb-1 padding-05">
        <Container fluid>
        <Header as="h2">Your {props.name}</Header>
        <div className="space-between padding-05">
        <p>{this.props.result.title}</p>
        </div>
            </Container>
                </div>
                
    );
}
}

export default ResultView
