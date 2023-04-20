import React from 'react'
import { useState, useEffect } from 'react'
const TitleCount = () => {
    
    const [lcbCount, setLcbCount] = useState(parseInt(localStorage.getItem("lcbKey")) || 0)
    const [cbCount, setcbCount] = useState(parseInt(localStorage.getItem("cbKey")) || 0)
    const [cabCount, setCabCount] = useState(parseInt(localStorage.getItem("cabKey")) || 0)

    useEffect(()=>{
        localStorage.setItem("lcbKey", lcbCount)
        localStorage.setItem("cbKey", cbCount)
        localStorage.setItem("cabKey", cabCount)
    },[lcbCount,cbCount,cabCount])
    
    return (
        <>
        <nav>
            <div className='navbar'>
            <span>Switch Workflow</span>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </div>
        </nav>
            <div className="container1">
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" value={lcbCount}/>
                    <div class="card-body">
                        <h5 class="card-title cardText1">LCB Count</h5>
                        <button onClick={()=>setLcbCount(val => (lcbCount>0 ? val-1: 0))}>-</button>
                        <button onClick={()=>setLcbCount(val => val+1)}>+</button>
                        <button onClick={()=>setLcbCount(0)}>Clear</button>
                    </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="cabCount" value={cabCount}/>
                    <div class="card-body">
                        <h5 class="card-title cardText1">CAB Count</h5>
                        <button onClick={()=>setCabCount(val => (cabCount>0 ? val-1: 0))}>-</button>
                        <button onClick={()=>setCabCount(val => val+1)}>+</button>
                        <button onClick={()=>setCabCount(0)}>Clear</button>
                    </div>
                </div>
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="cbCount" value={cbCount}/>
                    <div class="card-body">
                        <h5 class="card-title  cardText1 ">CB Count</h5>
                        <button onClick={()=>setcbCount(val => (cbCount>0 ? val-1: 0))}>-</button>
                        <button onClick={()=>setcbCount(val => val+1)}>+</button>
                        <button onClick={()=>setcbCount(0)}>Clear</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleCount
