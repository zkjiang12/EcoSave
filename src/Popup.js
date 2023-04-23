import {React,useState,useEffect} from 'react'
import ProgressBar from './components/ProgressBar';
import Purchases from './components/Purchase'
import Input from './components/Input'
import {db} from './firebase'
import {getDocs,collection } from 'firebase/firestore'
import Access from './components/Access';
import BarChart from './components/BarChart'
import x from '/Users/zikangjiang/ChromeExtension/app/src/x.png'



const Popup = () => {
  // purchases are called posts since I'm reusing old code from another program
  const [loggedIn,setLogin] = useState(true)

  const [posts,setPosts] = useState([])
  const postsRef = collection(db,"users",'zkjiang12@gmail.com','purchases')
  const [newPost,setNewPost] = useState(false)

  
  const querySnapshot = async()=>{
      try{
          const content = await getDocs(postsRef)
          const parsedContent = content.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id
          }))
          setPosts(parsedContent)
          // console.log(posts)
      } catch(err){
          console.error(err)
      }
  }
  querySnapshot()
  useEffect(()=>{
          querySnapshot()
          // console.log('running')
  },[newPost])


  let totalcost = 0
  posts.map((post)=>
      {
          totalcost = totalcost + (+post.cost)
      }
  )
  const co2_emitted = (totalcost*0.327*0.30)
  const rounded_co2 = +co2_emitted.toFixed(4)

  function openPurchase(){
    setOpenPage(2)
  }
  function openHome(){
    setOpenPage(1)
  }


  const [open,setOpenPage] = useState(1)
 
  if (open==1){
    return (
      <div className = 'popup'>
        <span className='title'>Total Cost</span>
        <div className='content--container'>
          <div className='chart--container'>
            <BarChart totalcost={totalcost} rounded_co2={rounded_co2}/> 
          </div>
          <h2 type = 'button' className = 'open--page2' onClick = {openPurchase}>Your Purchases</h2>
        </div>
      </div>
    );
  }

  if (open==2){
    return(
      <div className = 'page2'>
         <img type = 'button' onClick={openHome} src = {x} className = 'close--page2'/>
        <Input/>
        <Purchases posts={posts}/>
      </div>
    )      
  }
 
};

export default Popup;


// add data/relatability, so and so pounds of co2 is equivalent to driving a car this much or cutting down this many trees. shortening peoples lives etc.
// also the positive, one less kg is life saved or healthier kid, or prolonged life. 



