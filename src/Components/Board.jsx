import React, { Component } from 'react';
// import './src/Style.css';
import Square from './Square';

class Board extends Component {
    constructor() {
        super()
        this.state = {
            squareArr: Array(9).fill(null),
            nextPlayer: true
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squareArr[i]}
                onClick={() => this.handleClick(i)} />
        )
    }

    handleClick = (i) => {
        if (this.state.squareArr[i] === null) {
            const array = this.state.squareArr
            array[i] = this.state.nextPlayer ? "X" : "O"
            this.setState({
                squareArr: array
            })
            console.log(array)

            // this.checkWinner(array)
            this.togglePlayer()
            return array[i];
        }
    }

    togglePlayer() { // no need to bind because there's no return. we don't use an output from this func//
        this.setState(prevState => ({
            nextPlayer: !prevState.nextPlayer
        }))
    }

    checkWinner = (array) => {
        // const [a, b, c, d, e, f, g, h, i] = this.state.squareArr
        // console.log(a, b, c)
        // console.log(array)
        // console.log(a, b, c, d, e, f, g, h, i)

        if (array.every(element => element !== null)) {
            console.log('no winner')

        }
        else if (array[0] === array[1] && array[1] === array[2] && array[0] !== null) {
            console.log('win 0 1 2')
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
        } else {
            console.log('ne ebe')
        }
    }

    render() {
        return (
            <div className='main'>
                <div className="status"> Next player is: {this.state.nextPlayer ? 'X' : 'O'}</div>

                <div className="row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className="row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className="row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div >
            // <div className='main'>
            //     <div className="row">
            //         <Square value={this.state.squareArr[0]} handleClick={() => this.handleClick(0)} />
            //         <Square value={this.state.squareArr[1]} handleClick={() => this.handleClick(1)} />
            //         <Square value={this.state.squareArr[2]} handleClick={() => this.handleClick(2)} />
            //     </div>
            //     <div className="row">
            //         <Square value={this.state.squareArr[3]} handleClick={() => this.handleClick(3)} />
            //         <Square value={this.state.squareArr[4]} handleClick={() => this.handleClick(4)} />
            //         <Square value={this.state.squareArr[5]} handleClick={() => this.handleClick(5)} />
            //     </div>
            //     <div className="row">
            //         <Square value={this.state.squareArr[6]} handleClick={() => this.handleClick(6)} />
            //         <Square value={this.state.squareArr[7]} handleClick={() => this.handleClick(7)} />
            //         <Square value={this.state.squareArr[8]} handleClick={() => this.handleClick(8)} />
            //     </div>
            // </div >
        )
    }
}

export default Board;
