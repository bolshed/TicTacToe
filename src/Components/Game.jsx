import React, { Component } from 'react';
import Board from './Board';


// ======================

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squareArr: Array(9).fill(null),
      nextPlayer: true,
      setWinner: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i) {
    const array = this.state.squareArr
    if (array[i] !== null) {
      return
    }
    array[i] = this.state.nextPlayer ? "X" : "O"
    this.setState({
      squareArr: array,
      nextPlayer: !this.state.nextPlayer
    })
    console.log(array)

    this.checkWinner(array)
    // this.togglePlayer()

  }

  // togglePlayer() { // no need to bind because there's no return. we don't use an output from this func//
  //   this.setState(prevState => ({
  //   }))
  // }

  checkWinner = (array) => {
    // const [a, b, c, d, e, f, g, h, i] = this.state.squareArr
    // console.log(a, b, c, d, e, f, g, h, i)

    if ((array[0] === array[1] && array[1] === array[2] && array[0] !== null) && (this.state.setWinner.length < 2)) {
      this.setState({
        setWinner: this.state.setWinner.push(array[0], array[1], array[2])
      })
      // } else if (this.state.setWinner.length === 0) {


      console.log(this.state.setWinner)

      // return;
    } else if (array[3] === array[4] && array[4] === array[5] && array[3] !== null) {
      console.log('win 3 4 5')
    } else if (array[6] === array[7] && array[7] === array[8] && array[6] !== null) {
      console.log('win 6 7 8')
    } else if (array[0] === array[4] && array[4] === array[8] && array[0] !== null) {
      console.log('win 0 4 8')
    } else if (array[2] === array[4] && array[4] === array[6] && array[2] !== null) {
      console.log('win 2 4 6')
    } else if (array[1] === array[4] && array[4] === array[7] && array[1] !== null) {
      console.log('win 1 4 7')
    } else if (array[2] === array[4] && array[4] === array[6] && array[2] !== null) {
      console.log('win 2 4 6')
    } else if (this.state.setWinner.length < 2) {
      return;
    } else if (array.every(element => element !== null)) {
      console.log('no winner')
    }
  }

  render() {
    return (
      <div className='Game'>
        <Board
          handleClick={(i) => this.handleClick(i)}
          nextPlayer={this.state.nextPlayer}
          squareArr={this.state.squareArr} />
        {/* <h1>heading</h1> */}
      </div>
    )
  }
}

export default Game;
