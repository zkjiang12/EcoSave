import {React,useState} from 'react'
import {db} from '../firebase'
import {collection, deleteDoc, doc } from 'firebase/firestore'
import dots from '/Users/zikangjiang/ChromeExtension/app/src/dots.png'


export default function EditList(props){
    const [show,setShow] = useState(false)

    const id = props.purchase.id
    const postsRef = doc(db,"users",'zkjiang12@gmail.com','purchases',id)
    const Delete = async()=>{
       deleteDoc(postsRef)
    }
    function change(){    
        setShow((prev)=>!prev)
    }
    return(
        <div className = 'buttons'>
           <img type = 'button' onClick = {change} src = {dots} className = 'dots'/>
           {
            show? <button onClick={Delete}>Delete</button>:
            ''
           }
        </div>
    )
}
// maybe also add an edit button, but not totally necessarry