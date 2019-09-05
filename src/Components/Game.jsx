import React, { Component } from 'react';
import Board from './Board';
import Status from './Status';


// ======================

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squareArr: Array(9).fill(null),
      nextPlayer: true,
      setWinner: null,
      winningSquares: []
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    const array = this.state.squareArr
    if (array[i] || this.state.setWinner) {
      return
    }

    array[i] = this.state.nextPlayer ? "X" : "O"
    this.setState({
      squareArr: array,
      nextPlayer: !this.state.nextPlayer
    })
    this.checkWinner(array)

  }

  checkWinner = (array) => {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < rows.length; i++) {
      const [a, b, c] = rows[i]
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        this.setState({
          setWinner: array[a]
        })
        return array[a]
      }
    }
    return null
  }

  render() {


    return (
      <div className='Game'>
        <Board
          handleClick={(i) => this.handleClick(i)}
          nextPlayer={this.state.nextPlayer}
          squareArr={this.state.squareArr} />
        <Status
          setWinner={this.state.setWinner}
          nextPlayer={this.state.nextPlayer}
          squareArr={this.state.squareArr}
        />
      </div>
    )
  }
}

export default Game;
