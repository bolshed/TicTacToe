import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {

    renderSquare(i) {
        return (<Square
            value={this.props.squareArr[i]}
            handleClick={() => this.props.handleClick(i)} />
        )
    }

    render() {
        return (
            <div className='main'>
                <div className="row">
                    {this.renderSquare(0)}A
                    {this.renderSquare(1)}B
                    {this.renderSquare(2)}C
                </div>
                <div className="row">
                    {this.renderSquare(3)}D
                    {this.renderSquare(4)}E
                    {this.renderSquare(5)}F
                </div>
                <div className="row">
                    {this.renderSquare(6)}G
                    {this.renderSquare(7)}H
                    {this.renderSquare(8)}I
                </div>
            </div >
        )
    }
}

export default Board;
