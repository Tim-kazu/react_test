import React, { Component } from 'react';
class App extends Component {
  render() {
    const greeting = 'Hi';
    return (
      <React.Fragment>
        <h1 className="foo">{greeting} React</h1>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log('I Clicked')}}/>
      </React.Fragment>
    );
  }
}

export default App;
