// src/components/IndianPlayers.js
import React from 'react';

const T20Players = ["Virat", "Rohit", "Rahul", "Jadeja"];
const RanjiPlayers = ["Pujara", "Saha", "Iyer", "Sarfaraz"];

const IndianPlayers = () => {
  // Merge arrays using spread operator
  const allPlayers = [...T20Players, ...RanjiPlayers];

  // Use destructuring to get odd/even index players
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Players: {allPlayers.join(', ')}</h2>
      <h3>Even Team Players:</h3>
      <ul>{evenPlayers.map((player, index) => <li key={index}>{player}</li>)}</ul>

      <h3>Odd Team Players:</h3>
      <ul>{oddPlayers.map((player, index) => <li key={index}>{player}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
