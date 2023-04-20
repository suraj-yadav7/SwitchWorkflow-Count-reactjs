import React from 'react'

const DailyTarget = () => {
    return (
        <>
            <div className='dailyTarget'>
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">Daily Target Count</h5>
                        <input type='text' name="todaysTarget" />
                        <input type='text' name="npt" />
                        <input type='text' name="icq" />
                        <button>Actual Target</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DailyTarget
