// src/components/ListOfPlayers.js
import React from 'react';

const players = [
  { name: "Virat", score: 95 },
  { name: "Rohit", score: 88 },
  { name: "Dhoni", score: 65 },
  { name: "Kohli", score: 100 },
  { name: "Sharma", score: 58 },
  { name: "Jadeja", score: 72 },
  { name: "Ashwin", score: 61 },
  { name: "Rahul", score: 81 },
  { name: "Pant", score: 67 },
  { name: "Bumrah", score: 74 },
  { name: "Shami", score: 90 },
];

const ListOfPlayers = () => {
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h3>Players with Score below 70:</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
