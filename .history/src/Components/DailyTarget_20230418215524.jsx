import React from 'react'

const DailyTarget = () => {
    return (
        <>
            <div className='dailyTarget'>
                <div class="card card2" >
                    <div class="card-body textType">
                        <h5 class="card-title">Daily Target Count</h5>
                        <span>Todays Target</span><input type='text' name="todaysTarget" />
                        <span>Meeting/NPT</span><input type='text' name="npt" />
                        <span>ICQ / LCB</span><input type='text' name="icq" />
                        <button >Actual Target</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
