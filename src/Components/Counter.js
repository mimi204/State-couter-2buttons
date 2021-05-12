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

    //third step in Mounting : methode componentdidmount()
    // componentDidMount(){
    //     console.log("componentDidMount()")
    //     //methode js : setInterval , selon l'interval(1s) state change (+1)
       
    //     // const memory = setInterval(() => {
    //     //     this.setState({ counter: this.state.counter+1 });
    //         // }, 1000);
    
    //      this.setState({ memory:  setInterval(() => {
    //         this.setState({ counter: this.state.counter+1 });
    //     }, 1000) });
    //     console.log(this.state.memory)
    // }


    //Second phase updating component
 //second step in Updating : methode componentDidUpdate()
    componentDidUpdate() {
        console.log("componentDidUpdate()")
    }

//third phase unmounting component
    componentWillUnmount() {
        console.log("componentWillUnmount()")
        clearInterval(this.state.memory)
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
       //second step in Mounting : methode render()
   // first step in Updating: methode render()

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
