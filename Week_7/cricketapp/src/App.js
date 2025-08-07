// src/App.js
import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = true; // Change to false to test conditional rendering

  return (
    <div className="App">
      <h1>Welcome to Cricket App</h1>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
