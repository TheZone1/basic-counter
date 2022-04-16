import React from 'react';
import { Component } from 'react';

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback Value', this.state.count)
        //     }
        // )
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    reset() {
        this.setState({
            count: 0
        })
        console.log(this.state.count)
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count = {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.decrement()}>Decrement</button>
                <button onClick={() => this.incrementFive()}>+ 5</button>
            </div>
        )
    }
}

export default Counter