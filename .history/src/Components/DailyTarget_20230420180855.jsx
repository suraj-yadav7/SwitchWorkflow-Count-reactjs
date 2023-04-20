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
            setTarget((prev)=> ({...prev, npt:val || 0}))
        }

        const inputVal2 = (e)=>{
            let val = parseInt(e.target.value)
            setTarget((prev)=> ({...prev, icq:val || 0}))
         
        }

        const targetHandle = (e) =>{
            
            if(radioBtn === "LCB"){
                let output = ((955-target.icq)-((parseInt((target.npt/0.502).toFixed())) - parseInt((target.icq/6).toFixed())))
                setTarget((prev)=>({...prev,targ:output}))
            }
            else if(radioBtn === "CB") {
                let output = ((310-target.icq)-((parseInt((target.npt/1.548).toFixed())) - parseInt((target.icq/6).toFixed())))
                // let output = parseInt(310-((parseInt((target.npt).toFixed())) + parseInt((target.icq/6).toFixed())))
                // console.log(310-((target.npt/1.548) + (target.icq/6)))
                setTarget((prev)=>({...prev,targ:output}))
                
            }
            else if(radioBtn === "CAB") {
                let output = ((442-target.icq)-((parseInt((target.npt/1.085).toFixed())) + parseInt((target.icq/6).toFixed())))
                setTarget((prev)=>({...prev,targ:output}))
            }
            else if(radioBtn === "KEP") {
                let output = ((200)-(parseInt((target.npt/2.4).toFixed()) ))
                console.log((target.npt/2.4))
                setTarget((prev)=>({...prev,targ:output}))
            }

        }
            useEffect(()=>{
                setTarget((prev)=>({...prev,targ:0}))
            },[radioBtn])

    return (
        <>
            <div className='dailyTarget'>
                <div className="card card2" >
                    <div className="card-body textType">
                    <div className="radioBtn" style={{margin: "10px"}}>
                        <input type='radio' onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="LCB"/>LCB
                        <input type='radio'onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="CB"/>CB
                        <input type='radio' onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="CAB"/>CAB
                        <input type='radio'onChange={e => setradioBtnClick(e.target.value)} name="workFlow" value="KEP"/>KEP
                    </div>
                        <h5 className="card-title cardText2">Daily Target Count</h5>
                        <span style={{fontSize: "1.5rem", marginTop:"15px"}}>Today's Target</span><h3 className='cardText2'>{target.targ<=0?0:target.targ}</h3>
                        <span>Meeting/ NPT/ KMT</span><input type='text' name="npt" className='inputArea' onChange={inputVal1} />
                        <span>ICQ / LCB / CAB / CB</span><input type='text' name="icq"  className='inputArea' onChange={inputVal2} />
                        <button  className='resultBtn' onClick={targetHandle}>Target</button>
                        <p>(Before submit please select above Workflow)</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
