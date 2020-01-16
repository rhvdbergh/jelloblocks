import React from 'react';

// CSS files
import './App.css';

// data and logic files
import colors from './data/colors';
import {
  selectNextColor,
  constructPiece,
  insertPieceOnGrid,
  removePieceFromGrid,
  movePieceDown,
  findDownwardFacingBlocks
} from './data/utilities';

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
      currentLevel: 1,
      grid: grid, // [x=10][y=24] representing the playing field
      currentPiece: constructPiece(selectNextColor()), // coordinates of current moving piece on grid
      nextPiece: selectNextColor(), // color of next piece
      counter: 0,
      speed: 1,
      timer: null,
      gamePaused: true
    };

    this.handleKeypress = this.handleKeypress.bind(this);
    this.togglePause = this.togglePause.bind(this);

    console.log('state', this.state);
  }

  togglePause() {
    if (!this.state.gamePaused) {
      // timer is running, so remove it to pause
      clearInterval(this.state.timer);
      this.setState({ gamePaused: true });
    } else {
      // timer is not running so add one to start game
      let fallSpeed = (5 - this.state.speed) * 1000;
      this.setState({
        timer: setInterval(() => {
          let movedPiece = movePieceDown(
            this.state.currentPiece,
            this.state.grid
          );
          this.setState({ currentPiece: movedPiece });
        }, fallSpeed),
        gamePaused: false
      });
    }
  }

  handleKeypress(evt) {
    console.log('evt', evt); // TODO: use evt to move pieces around
  }

  componentDidMount() {
    // add the first piece on the grid
    insertPieceOnGrid(this.state.currentPiece, this.state.grid);

    // TODO: implement
    document.addEventListener('keydown', this.handleKeypress);

    // unpause game to start
    this.togglePause();
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
