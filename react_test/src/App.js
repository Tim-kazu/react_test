import React, { Component } from 'react';

const App = () => (<Counter></Counter>);

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }
  handlePlus = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleMinus = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("render");
    return (
      <React.Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </React.Fragment>
    );
  }
};


export default App;
