import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  sayHello = () => {
    alert('Hello! Have a great day!');
  };

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayWelcome = (message) => {
    alert(`Welcome! ${message}`);
  };

  handleClick = (event) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Handling Example</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("This is the welcome message!")}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handleClick}>Synthetic Event Button</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
