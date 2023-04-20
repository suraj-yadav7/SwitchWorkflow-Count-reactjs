import React from 'react'
import {useState, useEffect} from "react"
const DailyTarget = () => {
        const [target, setTarget] = useState({
            targ:480,
            npt:0,
            icq:0
        })
        // const [npt, setNPT] = useState(0)
        // const [icq, setICQ] = useState(0)
        const inputVal1 = (e)=>{
            let val = e.target.value
            let namefeild = e.target.name   
            console.log("the npt", val)
            setTarget((prev)=> parseInt((prev.npt+ (target.npt=val))))
        }
        const inputVal2 = (e)=>{
            let val = e.target.value
            let namefeild = e.target.name    
            console.log("the icq", val)
         
        }


        
        const targetHandle = (e) =>{
        }

    return (
        <>
            <div className='dailyTarget'>
                <div class="card card2" >
                    <div class="card-body textType">
                        <h5 class="card-title">Daily Target Count</h5>
                        <span>Todays Target</span><input type='text' name="todaysTarget"   />
                        <span>Meeting/NPT</span><input type='text' name="npt"  onChange={inputVal1}  />
                        <span>ICQ / LCB</span><input type='text' name="icq"  onChange={inputVal2} />
                        <button onClick={targetHandle}>Actual Target</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
