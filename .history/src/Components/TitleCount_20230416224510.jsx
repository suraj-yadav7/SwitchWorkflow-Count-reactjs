import React from 'react'

const TitleCount = () => {
    return (
        <>
            <div className="container">
                <div class="card" style={{width: "18rem"}}>
                    <input type='text' name="lcbCount" />
                    <div class="card-body">
                        <h5 class="card-title">LCB Count</h5>
                        <p class="card-text">Some qui up the bulk of the card's content.</p>
                        <button >-</button>
                        <button >+</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleCount
