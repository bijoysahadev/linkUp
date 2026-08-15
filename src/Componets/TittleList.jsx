import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import toast, { Toaster } from 'react-hot-toast';
const TittleList = ({tittle,className,addContent}) => {
  const db = getDatabase()
  let [popup,setPopup]=useState(false)
  let [groupname,setGroupname]=useState("")
  let handleCreateGroup=()=>{
    console.log(groupname);
      set(push(ref(db, 'mygroup/')), {
        groupname:groupname,
        groupimage : "" ,

    
        }).then(()=> {
          setPopup(false)
          toast.success("Group Created")
        })
  }
  return (
  
     <div  > 
       <div className={` rounded-[20px] flex items-center justify-between   ${className} `} >
            <h3 className='text-base text-black font-semibold ' >{tittle}</h3>
   {
     addContent && <button  onClick={()=>setPopup(true) } className='text-black bg-white py-3 px-3 rounded-md text-xs' >{addContent}</button>
   }
       <BsThreeDotsVertical   className='text-[#5F35F5] text-sm   ' />
        {
          popup &&
           <div className=' absolute w-full h-full bg-[#0000000d] absolute top-0 left-0 z-50  flex justify-center items-center ' >
        <div className='w-[600px] h-[500px] py-20 bg-amber-100 rounded-md  ' >
           <div className='flex flex-col items-center justify-between gap-5 ' >
            <ImCross  onClick={()=>setPopup(false)}  className='relative -top-[55px] left-[250px] text-black  text-2xl ' />
            <h2 className='text-white text-4xl font-bold ' >Group Name   :</h2>
         <input  value={groupname}  onChange={(e)=>setGroupname(e.target.value)}  className=' w-[400px] border border-black rounded-md py-2 px-3' type="text" />
     
         <div className='flex items-center justify-between gap-4 ' >
            <button  onClick={handleCreateGroup}   className='text-white py-2 px-4 bg-red-500 rounded-2xl ' >Create</button>
           <button   onClick={()=>setPopup(false)}  className='text-white py-2 px-4 bg-red-500 rounded-2xl' >Cancel</button>
         </div>
           </div>
        </div>
       </div>
        }
           <Toaster />
       </div>
     </div>
  )
}

export default TittleList