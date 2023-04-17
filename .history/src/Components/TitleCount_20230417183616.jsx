import React from 'react'
import { useState, useEffect } from 'react'
const TitleCount = () => {
    
    const [lcbCount, setLcbCount] = useState(parseInt(localStorage.getItem("lcbKey")) || 0)

    useEffect(()=>{
        localStorage.setItem("lcbKey", lcbCount)
    },[lcbCount])
    
    return (
        <>
        <nav>
            <span>Switch Workflow</span>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
        </nav>
            <div className="container1">
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={lcbCount}/>
                    <div class="card-body">
                        <h5 class="card-title">LCB Count</h5>
                        <button onClick={()=>setLcbCount(val => (lcbCount>0 ? val-1: 0))}>-</button>
                        <button onClick={()=>setLcbCount(val => val+1)}>+</button>
                        <button onClick={()=>setLcbCount(0)}>Clear</button>
                    </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={lcbCount}/>
                    <div class="card-body">
                        <h5 class="card-title">CAB Count</h5>
                        <button onClick={()=>setLcbCount(val => (lcbCount>0 ? val-1: 0))}>-</button>
                        <button onClick={()=>setLcbCount(val => val+1)}>+</button>
                        <button onClick={()=>setLcbCount(0)}>Clear</button>
                    </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={lcbCount}/>
                    <div class="card-body">
                        <h5 class="card-title">CB Count</h5>
                        <button onClick={()=>setLcbCount(val => (lcbCount>0 ? val-1: 0))}>-</button>
                        <button onClick={()=>setLcbCount(val => val+1)}>+</button>
                        <button onClick={()=>setLcbCount(0)}>Clear</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleCount
