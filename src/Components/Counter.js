import React, { Component } from 'react'

export class Counter extends Component {

    //first phase Mounting component
    // first step in Mounting : creation of component nmethode constructor()
    constructor(props) {
        super(props)
    console.log("constructor()")
        this.state = {
            counter: 0,
            memory: null,
        }
    }
    increment = () => {
        this.setState({ counter:this.state.counter+1  });
    }

    decrement = () => {
        if (this.state.counter > 0) {
            this.setState({ counter:this.state.counter-1  });
        }
        else {
            alert("Counter stop at 0")
        }
    }
    render() {

        console.log("render()")
        return (
            <div display="inline">
                <button className="btn2 btn-5" onClick={this.increment}>+</button>
                 <span className="h2">{this.state.counter}</span>
                <button className="btn2 btn-5" onClick={this.decrement}>-</button>
                
               
            </div>
        )
    }
}

export default Counter
