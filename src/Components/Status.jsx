import React, { Component } from 'react';

export default class Status extends Component {
    render() {
        const winner = this.props.setWinner
        const player = this.props.nextPlayer
        let status

        if (winner) {
            status = <h3 className="Winner"> The Winner is: {winner}!</h3>
        } else if (this.props.squareArr.every(element => element)) {
            status = <h3 className="Winner"> No winner!</h3>
        } else {
            status = <h3 className="Status"> Next player is: {player ? 'X' : 'O'}</h3>
        }
        return (
            <div>
                {status}
            </div>
        )
    }
}