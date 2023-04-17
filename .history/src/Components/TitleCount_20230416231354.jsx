import React from 'react'
import { useState, useEffect } from 'react'
const TitleCount = () => {
    localStorage.setItem("lcbKey",0)
    const [lcbCount, setLcbCount] = useState(parseInt(localStorage.getItem("lcbKey")))

    const IncreaseCount = () =>{
        setLcbCount(lcbCount+1)
        localStorage.setItem("lcbKey",lcbCount)
    }
    const decreaseCount =()=>{
        setLcbCount(lcbCount>0? lcbCount-1:0)
    }
    useEffect(()=>{

    },[])
    return (
        <>
            <div className="container">
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={lcbCount}/>
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
