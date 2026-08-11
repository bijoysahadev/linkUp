import React, { useEffect, useState } from 'react'
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import { getDatabase, ref, onValue,set, push, remove  } from "firebase/database";
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
const BlockedList = () => {
      let data=useSelector(state=>state.activeuser.value
)
    const db = getDatabase()
  let [alluser,setAlluser]=useState([])
      useEffect(()=> {
           const starCountRef = ref(db, 'blocks/' );
       onValue(starCountRef, (snapshot) => {
         let arr=[]
          snapshot.forEach(item=> {  
  

if (item.val().blockbyid!=data.uid) {
     arr.push({...item.val() , id:item.key})
}

      
    
      
      
            
             
         
             
          })
          setAlluser(arr)
       });
         },[])
  return (
   <div> 
         <Searchbar />
         <div className='py-4  px-5  bg-red-300 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' >
             <TittleList className={`py-3`} tittle={`Block List`} />
            <div className='flex flex-col gap-3 h-[300px] overflow-y-scroll' >
             
         {
          alluser.map(item=> (
                   <MakeProfile mainClassname={`py-3`} profileImage={item.blockbyprofile} profileName={item.blockby} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`UnBlock`} />
          ))
         }
            
            </div>
          </div>
    </div>
  )
}

export default BlockedList