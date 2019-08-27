import React, { Component } from 'react';
import Board from './Components/Board';
import './Style.css';


class Game extends Component {
  constructor() {
    super()
    this.state = {
      squareArr: Array(9).fill(null),
      nextPlayer: true
    }
  }

  render() {
    return (
      <div className='Game'>
        <Board />
        {/* <h1>heading</h1> */}
      </div>
    )
  }
}

export default Game;
