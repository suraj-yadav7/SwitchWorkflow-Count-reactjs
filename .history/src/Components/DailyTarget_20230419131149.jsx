import React from 'react'
import {useState, useEffect} from "react"
const DailyTarget = () => {
        const [target, setTarget] = useState({
            targ:480,
            npt:0,
            icq:0
        })
        const [btnClick, setBtnClick] =useState(false)
        // const [npt, setNPT] = useState(0)
        // const [icq, setICQ] = useState(0)
        const inputVal1 = (e)=>{
            let val = parseInt(e.target.value)
            setTarget((prev)=> ({...prev, npt:val}))
        }

        const inputVal2 = (e)=>{
            let val = parseInt(e.target.value)
            setTarget((prev)=> ({...prev, icq:val}))
         
        }

        const targetHandle = (e) =>{
            let output = parseInt(target.targ-((target.npt) + (target.icq/6)))
            console.log(output)
            setTarget((prev)=>({...prev,targ:output}))
            console.log("the final reulst",target.targ)
        }
        useEffect(()=>{

        },[target.npt])

    return (
        <>
            <div className='dailyTarget'>
                <div class="card card2" >
                    <div class="card-body textType">
                        <h5 class="card-title">Daily Target Count</h5>
                        <span>Todays Target</span><input type='text' name="todaysTarget" value={target
                        .targ} />
                        <span>Meeting/NPT</span><input type='text' name="npt"  onChange={inputVal1}  />
                        <span>ICQ / LCB</span><input type='text' name="icq"  onChange={inputVal2} />
                        <button disabled={btnClick} onClick={targetHandle}>Actual Target</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
