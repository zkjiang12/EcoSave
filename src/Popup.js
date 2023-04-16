import {React,useState,useEffect} from 'react'
import ProgressBar from './components/ProgressBar';
import Purchases from './components/Purchase'
import Input from './components/Input'
import {db} from './firebase'
import {getDocs,collection } from 'firebase/firestore'
import Access from './components/Access';

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

  return (
    <div>
      {loggedIn?
   
        <div className = 'popup'>
          <h1 className='title'>Total Cost of Purchases</h1>
          <ProgressBar posts = {posts} />
          <div className='lower--container'>
            <Input/>
            <Purchases posts = {posts}/>
          </div>
        </div>
        :

        <div>
          <h1>Hi</h1>
          <Access login={loggedIn} setLogin={setLogin}/>
        </div>
      }
    </div>

  );
};

export default Popup;


// add data/relatability, so and so pounds of co2 is equivalent to driving a car this much or cutting down this many trees. shortening peoples lives etc.
// also the positive, one less kg is life saved or healthier kid, or prolonged life. 



