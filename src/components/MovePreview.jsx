import React from 'react'

export const MovePreview = ({ move,contact }) => {
    return (
        <div className="move-preview">
         { !contact?<p>To: {move.contactName}</p>:''}
            <p>Amount: <span className="dolar">${move.count}</span> | <span className="bitcoin">BTC:{Math.round(((move.countBitcoin) + Number.EPSILON) * 10000) / 10000}</span></p>
            <p>At: { move.atToShow}</p>
        </div>
    )
}
