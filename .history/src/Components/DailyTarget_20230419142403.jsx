import React from 'react'
import {useState, useEffect} from "react"
const DailyTarget = () => {
        const [target, setTarget] = useState({
            targ:480,
            npt:0,
            icq:0
        })
        // const [btnClick, setBtnClick] =useState(false)

        const [radioBtn, setradioBtnClick] = useState("")

        // const [npt, setNPT] = useState(0)
        // const [icq, setICQ] = useState(0)
        const inputVal1 = (e)=>{
            let val = parseInt(e.target.value)
            setTarget((prev)=> ({...prev, npt:val}))
            // setBtnClick(false)
        }

        const inputVal2 = (e)=>{
            let val = parseInt(e.target.value)
            setTarget((prev)=> ({...prev, icq:val}))
            // setBtnClick(false)
         
        }

        const targetHandle = (e) =>{
            if(radioBtn === "LCB"){
                let output = parseInt(480-((target.npt) + (target.icq/6)))
                console.log(output)
                setTarget((prev)=>({...prev,targ:output}))
                console.log("the final reulst",target.targ)
                // setBtnClick(true)
            }
            else if(radioBtn === "CB") {
                let output = parseInt(480-((target.npt) + (target.icq/3)))
                console.log(output)
                setTarget((prev)=>({...prev,targ:output}))
                console.log("the final reulst",target.targ)
                // setBtnClick(true)
            }

        }

        useEffect(()=>{
         setTarget((prev)=>({targ:0,npt:0,icq:0}))
        },[])
     

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
                        <span>Todays Target</span><h3>{target.targ}</h3>
                        <span>Meeting/NPT</span><input type='text' name="npt"  onChange={inputVal1}  />
                        <span>ICQ / LCB</span><input type='text' name="icq"  onChange={inputVal2} />
                        <button  onClick={targetHandle}>Actual Target</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
