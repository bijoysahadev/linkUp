
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
const MyGroupList = () => {
   const db = getDatabase()
    let[mygroup,setMygrpup]=useState([])
     useEffect(() => {
        const starCountRef = ref(db, 'mygroup/');
        onValue(starCountRef, (snapshot) => {
          let arr = []
          snapshot.forEach(item => {
         arr.push({ ...item.val(), id: item.key })
          
    
          })
          setMygrpup(arr)
        });
      }, [])
  return (
    <div> 
         <Searchbar />
         <div className='py-4  px-5  bg-red-300 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' >
             <TittleList   addContent="Create Group  " className={`py-3`} tittle={`MyGroup List`} />
           
            <div className='flex flex-col gap-3 h-[300px] overflow-y-scroll' >
            
            {
              mygroup.map(item=> (
                 
              <MakeProfile mainClassname={`py-3`} profileImage={item.groupimage} profileName={item.groupname
} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`ADD Member`} />

              ))
            }
            </div>
          </div>
    </div>
  )
}

export default MyGroupList