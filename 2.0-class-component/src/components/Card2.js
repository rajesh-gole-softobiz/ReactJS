import React, {Component} from 'react';

class Card2 extends Component{
    render(){
        return <>
         <h2>{this.props.name}</h2>
        <h2>{this.props.desc}</h2>
        </>
    }
}

export default Card2;