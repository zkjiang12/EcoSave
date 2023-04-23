import {React} from 'react'
import EditList from './EditList'


export default function Purchases(props){
    const posts = props.posts
    let totalcost = 0
    posts.map((post)=>
        {
            totalcost = totalcost + (+post.cost)
        }
    )

    return(
        <div className = 'purchase--container'>
            <h3>Purchases</h3>
            {posts.map((purchase)=>(
                <div className = 'purchase'>
                    <span>{purchase.purchase}: ${purchase.cost}</span>
                    <EditList purchase = {purchase}/>
                </div>
            ))}
            <h3>Total Cost : {totalcost.toFixed(4)}</h3>
        </div>

    )
}
// add show more button once filled