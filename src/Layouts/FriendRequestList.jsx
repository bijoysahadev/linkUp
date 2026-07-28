import React, { useEffect, useState } from 'react'
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import { getDatabase, ref, onValue,set, push  } from "firebase/database";
import { useSelector } from 'react-redux';
const FriendRequestList = () => {

  let [friendrequest,setFriendrequest]=useState([])
  let data=useSelector(state=>state.activeuser.value
)
  console.log(data?.uid);
   const db = getDatabase()
   useEffect(()=> {
      const starCountRef = ref(db, 'friendrequestlist/' );
  onValue(starCountRef, (snapshot) => {
    let arr=[]
     snapshot.forEach(item=> {
     if (data?.uid==item.val().recevierid) 
     {
  arr.push({...item.val()})
     }
       
        
    
        
     })
     setFriendrequest(arr)
  });
    },[])
    // console.log(friendrequest);
    
  return (
     <div> 
         <Searchbar />
         <div className='py-4  px-5  bg-red-300 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' >
             <TittleList className={`py-3`} tittle={`Friend Request List`} />
            <div className='flex flex-col gap-3 h-[300px] overflow-y-scroll' >
           {
            friendrequest.map(item=>(
                 
              <MakeProfile mainClassname={`py-3`} profileImage={cr7} profileName={item.sendername} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
            ))
           }
             
            </div>
          </div>
    </div>
  )
}

export default FriendRequestList