import React from 'react'
import { useState, useEffect } from 'react'
const TitleCount = () => {
    const [lcbCount, setLcbCount] = useState(0)

    const IncreaseCount = () =>{
        setLcbCount(lcbCount+1)
    }
    return (
        <>
            <div className="container">
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={lcbCount}/>
                    <div class="card-body">
                        <h5 class="card-title">LCB Count</h5>
                        <p class="card-text">Some qui up the bulk of the card's content.</p>
                        <button >-</button>
                        <button onClick={IncreaseCount}>+</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleCount
