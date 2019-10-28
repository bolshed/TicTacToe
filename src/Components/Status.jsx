import React from 'react';

function Status(props) {

    const winner = props.setWinner
    const player = props.nextPlayer
    let status

    if (winner) {
        status = <h3 className="winner"> The Winner is: {winner} !</h3>
    } else if (props.squareArr.every(element => element)) {
        status = <h3 className="winner"> No winner!</h3>
    } else {
        status = <h3 className="status"> Next player is: {player ? 'X' : 'O'}</h3>
    }
    return (
        <div>
            {status}
            <button className='restart' onClick={props.restartGame}> Restart game </button>
        </div>
    )
}

export default Status