import React from 'react'
import {db} from '../firebase'
import {collection, addDoc} from 'firebase/firestore'

export default function Input(){

    const [price,setPrice] = React.useState()
    const [purchase,setPurchase] = React.useState()

    const postsRef = collection(db,"users","zkjiang12@gmail.com","purchases")

    const post = async() =>{
        try{
            await addDoc(postsRef,{
                purchase: purchase,
                cost: price,
            })
            console.log('hiii')
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div className='form'>
            <h3>Submit Purchase</h3>
            <input className = 'form--input' placeholder = 'Object Purchased' onChange={(e)=>setPurchase(e.target.value)}/>
            <input className = 'form--input'type = 'number' placeholder = 'Cost of Purchase' onChange={(e)=>setPrice(e.target.value)}/>
            <button className='form--button' onClick = {post}>Submit</button>
        </div>
    )
}