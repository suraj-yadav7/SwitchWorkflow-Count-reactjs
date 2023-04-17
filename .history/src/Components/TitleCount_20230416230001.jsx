import React from 'react'
import { useState, useEffect } from 'react'
let val=localStorage.getItem("lcbKey")
const TitleCount = () => {
    const [lcbCount, setLcbCount] = useState(val)
    const IncreaseCount = () =>{
        localStorage.setItem("lcbKey",lcbCount)
        setLcbCount(lcbCount+1)
    }
    const decreaseCount =()=>{
        setLcbCount(lcbCount>0? lcbCount-1:0)
    }
    return (
        <>
            <div className="container">
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={val}/>
                    <div class="card-body">
                        <h5 class="card-title">LCB Count</h5>
                        <p class="card-text">Some qui up the bulk of the card's content.</p>
                        <button onClick={decreaseCount}>-</button>
                        <button onClick={IncreaseCount}>+</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleCount
