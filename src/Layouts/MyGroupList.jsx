
import MakeProfile from '../Componets/MakeProfile'
import Searchbar from '../Componets/Searchbar'
import TittleList from '../Componets/TittleList'
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { ImCross } from 'react-icons/im';
const MyGroupList = () => {
  let [popup,setPopup]=useState(false)
  let [friend,setFriend]=useState([])
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
      let handleAddMember =()=> {
        
      }
     useEffect(() => {
        const starCountRef = ref(db, 'userlist/');
        onValue(starCountRef, (snapshot) => {
          let arr = []
          snapshot.forEach(item => {
         arr.push({ ...item.val(), id: item.key })
          
    
          })
          setFriend(arr)
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
} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`ADD Member`} onclick={()=>setPopup(true)}  />

              ))
            }
            </div>
          </div>



          {
            popup &&
            <div className=' absolute w-full h-full bg-[#0000000d] absolute top-0 left-0 z-50  flex justify-center items-center ' >
                  <div className='w-[600px] h-auto py-20 bg-amber-100 rounded-md  ' >
                     <div className='flex flex-col items-center justify-between gap-5 ' >
                      <ImCross  onClick={()=>setPopup(false)}  className='relative -top-[55px] left-[250px] text-black  text-2xl ' />
                      <h2 className='text-white text-4xl font-bold  pb-2 ' >Mern  :</h2>
                      <h2 className='text-white text-3xl font-bold  pb-2 ' >All Users   :</h2>
                 
               <div className='w-full px-15  h-[500px] overflow-y-scroll ' >
                {
                  friend.map(item=> (
                              <MakeProfile mainClassname={`py-3`} profileImage={item.profile_picture
} profileName={item.username

} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`ADD `}  onclick={ ()=>handleAddMember(item)} />
                  ))
                }
  
               </div>
                  
                     </div>
                  </div>
                 </div>

          }
             
    </div>
  )
}

export default MyGroupList