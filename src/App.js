import React from 'react';

// CSS files
import './App.css';

// data and logic files
import colors from './data/colors';
import { selectNextColor, constructPiece } from './data/utilities';

// components
import './components/Block';
import PlayingField from './components/PlayingField';
import ShowNextBlock from './components/ShowNextBlock';
import Scoreboard from './components/Scoreboard';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);

    // create an empty grid, filled with 0s
    let grid = [];
    for (let x = 0; x < 10; x++) {
      grid.push([]);
      for (let y = 0; y < 24; y++) {
        grid[x].push(0);
      }
    }

    this.state = {
      currentScore: 0,
      currentLevel: 0,
      grid: grid, // [x=10][y=24] representing the playing field
      currentPiece: constructPiece(selectNextColor()), // coordinates of current moving piece on grid
      nextPiece: selectNextColor(), // color of next piece
      counter: 0,
      speed: 0,
      gamePaused: true
    };

    console.log(this.state);
  }

  componentDidMount() {}

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
