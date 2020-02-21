import React, { Component } from 'react';
import { render } from '@testing-library/react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }
  handleMiusButton = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMiusButton}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
