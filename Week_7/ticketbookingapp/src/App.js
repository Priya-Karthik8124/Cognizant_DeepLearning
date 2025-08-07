// src/App.js
import React, { Component } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    let content;

    if (isLoggedIn) {
      content = <UserPage />;
    } else {
      content = <GuestPage />;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Flight Ticket Booking App</h1>
        {isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
        <hr />
        {content}
      </div>
    );
  }
}

export default App;
