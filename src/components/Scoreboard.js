import React from 'react';
import ScoreCounter from './ScoreCounter';
import LevelCounter from './LevelCounter';

const Scoreboard = props => {
  return (
    <div id="scoreboard">
      <ScoreCounter />
      <LevelCounter />
    </div>
  );
};

export default Scoreboard;
