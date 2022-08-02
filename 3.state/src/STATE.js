import React, { Component } from 'react'

export default class STATE extends Component {

  // To create a state we need constructor. shortcuts: rconst
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         
      }
    }

 // Create handleIncrement fun
 handleIncrement = () =>{
    this.setState({
        count: this.state.count + 1
    })
 }

 // Create handleDecrement fun
 handleDecrement = () =>{
    this.setState({
        count: this.state.count - 1
    })
 }


  render() {
    const {count} = this.state
    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement} disabled={count===0?true : false}>-</button>
        </>
    )
  }
}
