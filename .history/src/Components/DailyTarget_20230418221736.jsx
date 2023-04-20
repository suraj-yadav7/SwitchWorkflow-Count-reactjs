import React from 'react'
import {useState, useEffect} from "react"
const DailyTarget = () => {
        const [target, setTarget] = useState(480)
        const [npt, setNPT] = useState(0)
        const [icq, setICQ] = useState(0)

        const targetHandle = () =>{
            let 
        }
    return (
        <>
            <div className='dailyTarget'>
                <div class="card card2" >
                    <div class="card-body textType">
                        <h5 class="card-title">Daily Target Count</h5>
                        <span>Todays Target</span><input type='text' name="todaysTarget" value={target}/>
                        <span>Meeting/NPT</span><input type='text' name="npt"  value={npt}/>
                        <span>ICQ / LCB</span><input type='text' name="icq" value={icq}/>
                        <button onClick={targetHandle}>Actual Target</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
