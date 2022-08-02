# Class Component

### Functional Component
function Card1(props){
    return <>
    <h2>{props.name}</h2>
    <h2>{props.desc}</h2>
    </>
}

`Note : under functional component there will be return`

### Class Component
import React, {Component} from 'react';

class Card2 extends Component{
    render(){
        return <>
         <h2>{this.props.name}</h2>
        <h2>{this.props.desc}</h2>
        </>
    }
}
`Note : under class component there will be render() and then return`

`props are by default come to class component`

