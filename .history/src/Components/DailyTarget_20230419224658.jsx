import React from 'react'
import {useState, useEffect} from "react"
const DailyTarget = () => {
        const [target, setTarget] = useState({
            targ:0,
            npt:0,
            icq:0
        })

        const [radioBtn, setradioBtnClick] = useState("")
     
        const inputVal1 = (e)=>{
            let val = parseInt(e.target.value)
            console.log(val)
            setTarget((prev)=> ({...prev, npt:val || 0}))
        }

        const inputVal2 = (e)=>{
            let val = parseInt(e.target.value)
            console.log(val)
            setTarget((prev)=> ({...prev, icq:val || 0}))
         
        }

        const targetHandle = (e) =>{
            if(radioBtn === "LCB"){
                let output = (955-((parseInt((target.npt/0.502).toFixed())) + parseInt((target.icq/6).toFixed())))
                console.log(output)
                setTarget((prev)=>({...prev,targ:output}))
                console.log("the final reulst",target.targ)
            }
            else if(radioBtn === "CB") {
                let output = (310-((parseInt((target.npt/1.548).toFixed())) + parseInt((target.icq/6).toFixed())))
                // let output = parseInt(310-((parseInt((target.npt).toFixed())) + parseInt((target.icq/6).toFixed())))
                // console.log(310-((target.npt/1.548) + (target.icq/6)))
                setTarget((prev)=>({...prev,targ:output}))
                console.log("the final reulst",target.targ)
            }

        }
            useEffect(()=>{
                setTarget({
                    targ:0,
                    npt:0,
                    icq:0
                })
            },[radioBtn])

    return (
        <>
            <div className='dailyTarget'>
                <div class="card card2" >
                    <div class="card-body textType">
                    <div className="radioBtn" style={{margin: "10px"}}>
                        <input type='radio' onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="LCB"/>LCB
                        <input type='radio'onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="CB"/>CB
                        <input type='radio' onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="CAB"/>CAB
                        <input type='radio'onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="KEP"/>KEP
                    </div>
                        <h5 class="card-title">Daily Target Count</h5>
                        <span>Todays Target</span><h3>{target.targ<=0?0:target.targ}</h3>
                        <span>Meeting/NPT</span><input type='text' name="npt"  onChange={inputVal1}  />
                        <span>ICQ / LCB</span><input type='text' name="icq"  onChange={inputVal2} />
                        <button  onClick={targetHandle}>Actual Target</button>
                        <p style={{fontSize: "11px"}}>(Before submit please select above Workflow)</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
