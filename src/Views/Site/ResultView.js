
import React, { Component } from 'react'
import {Container, Header} from 'semantic-ui-react'

class Result extends React.Component{

 
render(){
    return(
        <div className="form-wrapper">
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

export default Result
