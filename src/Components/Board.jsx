import React, { Component } from 'react';
import Square from './Square';
class Board extends Component {

    renderSquare(i) {
        return <Square
            value={this.props.squareArr[i]}
            handleClick={() => this.props.handleClick(i)} />
    }

    render() {
        return (
            <div className='main'>
                <h3 className="status"> Next player is: {this.props.nextPlayer ? 'X' : 'O'}</h3>

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
            //         <Square value={this.props.squareArr[0]} handleClick={() => this.props.handleClick(0)} />
            //         <Square value={this.props.squareArr[1]} handleClick={() => this.props.handleClick(1)} />
            //         <Square value={this.props.squareArr[2]} handleClick={() => this.props.handleClick(2)} />
            //     </div>
            //     <div className="row">
            //         <Square value={this.props.squareArr[3]} handleClick={() => this.props.handleClick(3)} />
            //         <Square value={this.props.squareArr[4]} handleClick={() => this.props.handleClick(4)} />
            //         <Square value={this.props.squareArr[5]} handleClick={() => this.props.handleClick(5)} />
            //     </div>
            //     <div className="row">
            //         <Square value={this.props.squareArr[6]} handleClick={() => this.props.handleClick(6)} />
            //         <Square value={this.props.squareArr[7]} handleClick={() => this.props.handleClick(7)} />
            //         <Square value={this.props.squareArr[8]} handleClick={() => this.props.handleClick(8)} />
            //     </div>
            // </div >
        )
    }
}

export default Board;
