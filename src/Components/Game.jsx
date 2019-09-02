import React, { Component } from 'react';
import Board from './Board';


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
    if (array[i] !== null) {
      return
    } else if (this.state.setWinner) {
      return
    }

    array[i] = this.state.nextPlayer ? "X" : "O"
    this.setState({
      squareArr: array,
      nextPlayer: !this.state.nextPlayer
    })
    this.checkWinner(array)
    // this.togglePlayer()
  }

  // togglePlayer() { // no need to bind because there's no return. we don't use an output from this func//
  //   this.setState(prevState => ({
  //   }))
  // }

  checkWinner = (array) => {
    const [a, b, c, d, e, f, g, h, i] = this.state.squareArr

    if (this.state.setWinner) {
      return;
    } else if (a === b && b === c && a !== null) {
      this.setState({
        setWinner: a
        // winnerIs: d
      })
    } else if (d === e && e === f && d !== null) {
      this.setState({
        setWinner: d,
        // winnerIs: a
      })
    } else if (g === h && h === i && g !== null) {
      this.setState({
        setWinner: g,
        // winnerIs: g
      })
    } else if (a === e && e === i && a !== null) {
      this.setState({
        setWinner: a,
        // winnerIs: a
      })
    } else if (c === e && e === g && c !== null) {
      this.setState({
        setWinner: c,
        // winnerIs: c
      })
    } else if (b === e && e === h && b !== null) {
      this.setState({
        setWinner: b,
        // winnerIs: b
      })
    } else if (a === d && d === g && a !== null) {
      this.setState({
        setWinner: a,
        // winnerIs: a
      })
    } else if (c === f && f === i && c !== null) {
      this.setState({
        setWinner: c,
        // winnerIs: c
      })
    } else if (array.every(element => element !== null)) {
      console.log('no winner')
    }
    // console.log(this.state.setWinner)
  }

  render() {
    let winner = this.state.setWinner
    let player = this.state.nextPlayer
    return (
      <div className='Game'>

        <Board
          handleClick={(i) => this.handleClick(i)}
          nextPlayer={this.state.nextPlayer}
          squareArr={this.state.squareArr} />


        {winner ? <h3 className="Winner"> The Winner is: {winner}</h3> : <h3 className="Status"> Next player is: {player ? 'X' : 'O'}</h3>}

      </div>
    )
  }
}

export default Game;
