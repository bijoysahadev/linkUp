import React, { useEffect, useState } from 'react'
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import { getDatabase, ref, onValue } from "firebase/database";
const UserList = () => { 
  const db = getDatabase()
  let [alluser,setAlluser]=useState([])
  useEffect(()=> {
    const starCountRef = ref(db, 'userlist/' );
onValue(starCountRef, (snapshot) => {
  let arr=[]
   snapshot.forEach(item=> {
    arr.push(item.val())
  
    
   })
   setAlluser(arr)
});
  },[])
  return (
      <div> 
         <Searchbar />
         <div className='py-4  px-5  bg-red-300 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' >
             <TittleList className={`py-3`} tittle={`User List`} />
            <div className='flex flex-col gap-3 h-[300px] overflow-y-scroll' >
             
              {
                alluser.map(item=> (
                  <MakeProfile mainClassname={`py-3`} profileImage={item.profile_picture} profileName={item.username} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`} />
            
                ))
              }
            </div>
          </div>
    </div>
  )
}

export default UserList