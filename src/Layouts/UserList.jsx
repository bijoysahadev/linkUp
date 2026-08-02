import React, { useEffect, useState } from 'react'
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import { getDatabase, ref, onValue,set, push  } from "firebase/database";
import { useSelector } from 'react-redux';

const UserList = () => { 
  // const data=useSelector(state=>(state.activeuser.value)
  // )
// 

  let [concactFrinedRequest,setConcactFrinedRequestt]=useState([])
   useEffect(()=> {
       const starCountRef = ref(db, 'friendrequestlist/' );
   onValue(starCountRef, (snapshot) => {
     let arr=[]
      snapshot.forEach(item=> {
    
   arr.push(item.val().recevierid + item.val().senderid )
  
  
        
         
     
         
      })
      setConcactFrinedRequestt(arr)
   });
     },[])

  console.log(concactFrinedRequest);
  
  // 
  const db = getDatabase()
  let [alluser,setAlluser]=useState([])
  let data=useSelector(state=>state.activeuser.value
)

  
  
  useEffect(()=> {
    const starCountRef = ref(db, 'userlist/' );
onValue(starCountRef, (snapshot) => {
  let arr=[]
   snapshot.forEach(item=> {
 
      if (item.key!=data.uid) {
       arr.push({...item.val(),id:item.key})
      
      }
      
   })
   setAlluser(arr)
});
  },[])

    let handleAddFriend=(item)=> {
  //  console.log("clicked");
    // console.log(item);
    
  set(push(ref(db, 'friendrequestlist/')), {
   sendername : data.displayName,
   senderid: data.uid, 
   senderprofile: data.photoURL,   
   receievename: item.username,
   recevierid: item.id,
   recevierprofile: item.profile_picture,

  });
}


  return (
      <div> 
         <Searchbar />
         <div className='py-4  px-5  bg-red-300 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' >
             <TittleList className={`py-3`} tittle={`User List`} />
            <div className='flex flex-col gap-3 h-[300px] overflow-y-scroll' >
             
              {
                alluser.map(item=> (
                  concactFrinedRequest.includes(item.id + item.uid) ||  concactFrinedRequest.includes( item.uid + item.id  )
                  ?   <MakeProfile  mainClassname={`py-3`} profileImage={item.profile_picture} profileName={item.username} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText= {`Join`} onclick={()=>handleAddFriend(item)} />:<MakeProfile  mainClassname={`py-3`} profileImage={item.profile_picture} profileName={item.username} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText= {`Pending`} onclick={()=>handleAddFriend(item)} />
                
            
                ))
              }
            </div>
          </div>
    </div>
  )
}

export default UserList