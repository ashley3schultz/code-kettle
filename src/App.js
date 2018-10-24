import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    input: [],
    array: []
  }

  handleInput = (event) => {
    var RegExpression = /[0-9,[\]]/;
    if(RegExpression.test(event.target.value)) {
      this.setState({input: event.target.value})
    }
    console.log(this.state.input)
  }

  flattenArray = (array) => {

    var newArray = []

    var deepFlatten = (b) => {
      if(b.length > 1) {
        b.forEach((c) => { 
          deepFlatten(c) 
        })
      } else {
        newArray.push(b)
      }
    }

    array.forEach((a) => { 
      deepFlatten(a) 
    })

    return newArray
    
  }

  handleSubmit = (event) => {
    event.preventDefault()
    var nestedArray = JSON.parse(this.state.input)
    this.setState({array: this.flattenArray(nestedArray)})
    console.log("Before: ", this.state.input)
  }

  render() {
    var array = this.state.array.length ? "[" + this.state.array.toString().replace(/,/g, ", ") + "]" : null
    return (
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input 
            onChange={this.handleInput}
            type="text" 
            value={this.state.input} 
            paceholder="Input Nested Array"
            />
            <input type="submit" value="Flatten"/>
          </form>
          <h1>{array}</h1>
          {this.state.array.length ? console.log("After: ", this.state.array) : null}
        </div>
    );
  }
}

export default App;
