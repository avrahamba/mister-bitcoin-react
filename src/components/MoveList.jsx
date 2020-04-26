import React from 'react'
import {MovePreview} from './MovePreview'
export const MoveList = ({moves,contact=false}) => {
    return (
        <div className="move-list">
            {moves.map(move=><MovePreview contact={contact} move={move} key={move.at}/>)}
        </div>
    )
}
