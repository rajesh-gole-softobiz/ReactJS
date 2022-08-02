import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

class C_Rendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }


  render() {
    

    //Method-1 : if-else
    if(this.state.isLoggedIn){
        return <HomePage/>
    }else{
        return <LoginPage/>
    }
    
  }
}

export default C_Rendering;
