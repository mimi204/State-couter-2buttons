import './App.css';

import React, { Component } from 'react'
import Counter from './Components/Counter';

export class App extends Component {
  //object state
  state = {
    isShow:false
  }
 

//event
  toggle = () => {
    this.setState({ isShow: !this.state.isShow })
  }
 
  render() {
    return (
      <div>

        <div align="center" className="fond">
          <h1>COUNTER</h1>
          <button className="btn btn-5" onClick={this.toggle}> {this.state.isShow ? "Hide the counter" : "Show the counter"}</button>
          {this.state.isShow ? <Counter/> : ""}
          

          

        </div>


      </div>
    )
  }
}

export default App

