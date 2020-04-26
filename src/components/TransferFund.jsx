import React, { useState } from 'react'

export const TransferFund = ({ send, name }) => {
    const [count, setCount] = useState(0)
    return (
        <div className="transfer-fund">
            <p>Transfer coins to {name}</p>
            <label>
                <span>Amount ($):</span>
                <input type="number" value={count} onChange={ev => { setCount(ev.target.value); }} />
                <button onClick={() => {send(count);setCount(0)}}>transfer</button>
            </label>
        </div>
    )

}
