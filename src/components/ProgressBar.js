import React from 'react';

const ProgressBar = (props) => {
    const posts = props.posts
    let totalcost = 0
    posts.map((post)=>
        {
            totalcost = totalcost + (+post.cost)
        }
    )
    const width = (totalcost/10).toFixed(4)
    const co2_emitted = (totalcost*0.327*0.30)
    const rounded_co2 = co2_emitted.toFixed(4)
    // 0.327 is co2 emitted per dollar(based on global emissions and global gdp)
    // 0.30 is because around 30-35% of global emissions are not from corporations(based on 2017 study found by chat gpt)

    return (
        <div className = 'bars--container'>
            <h3>Money Spent</h3>
            <div className="progress--container">
                <div className="progress--bar" style={{ width: `${width}%` }}>
                    <span className = 'percentage'>{` $ ${totalcost.toFixed(4)}`}</span>
                </div>
            </div>
            <h3>Co2 Emitted</h3>
            {/* add more nuance to co2 calc, if plastic/high emissions material, increase the %, if not, reduce percentage etc */}
            <div className="progress--container">
                <div className="progress--bar" style={{ width: `${width}%` }}>
                    <span className = 'percentage'>{`${rounded_co2}kg`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;