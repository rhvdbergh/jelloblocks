import React from 'react';

// CSS files
import './App.css';

// data and logic files
import './data/colors';

// components
import './components/Block';
import PlayingField from './components/PlayingField';
import ShowNextBlock from './components/ShowNextBlock';
import Scoreboard from './components/Scoreboard';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 0,
      currentLevel: 0,
      grid: [], // [10][20] representing the playing field
      currentPiece: [], // coordinates of current moving piece on grid
      nextPiece: [],
      counter: 0,
      speed: 0,
      gamePaused: true
    };
  }
  render() {
    return (
      <div className="App">
        Loading ...
        <PlayingField />
        <ShowNextBlock />
        <Scoreboard />
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;
