
import React, { Component } from 'react'
import {Container, Header} from 'semantic-ui-react'

class ResultView extends React.Component{

render(){

    const result = this.props.result;
    return(
        <tr>
            <th colspan="">
            {result}
            </th>
            </tr>

    );
}
}

class ResultView extends React.Component{
    rendeer(){
        const result = this.props.product;
        const poll = poll.result ?
        result.poll :
        <span style={{color: 'black'}}>
        {{poll.result}}
        </span>;

        return(

            <tr>
                <td>{result}</td>
                <td>{result.poll}</td>
</tr>
        );
    }
}



