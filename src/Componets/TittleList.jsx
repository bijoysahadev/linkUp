import React from 'react'
import Grid from '@mui/material/Grid';
import { BsThreeDotsVertical } from "react-icons/bs";
const TittleList = ({tittle,className,addContent}) => {
  return (
  
     <div  > 
       <div className={` rounded-[20px] flex items-center justify-between   ${className} `} >
            <h3 className='text-base text-black font-semibold ' >{tittle}</h3>
   {
     addContent && <button className='text-black bg-white py-3 px-3 rounded-md text-xs' >{addContent}</button>
   }
       <BsThreeDotsVertical   className='text-[#5F35F5] text-sm   ' />
       <div className='w-full h-full bg-[#0000000d] absolute top-0 left-0 z-50  flex justify-center items-center ' >
        <div className='w-[600px] h-[500px] py-20 bg-amber-100 rounded-md  ' >
           <div className='flex flex-col items-center justify-between gap-5 ' >
            <h2 className='text-white text-4xl font-bold ' >Group Name   :</h2>
         <input  className=' w-[400px] border border-black rounded-md py-2 px-3' type="text" />
     
         <div className='flex items-center justify-between gap-4 ' >
            <button  className='text-white py-2 px-4 bg-red-500 rounded-2xl ' >Create</button>
           <button  className='text-white py-2 px-4 bg-red-500 rounded-2xl' >Cancel</button>
         </div>
           </div>
        </div>
       </div>
       </div>
     </div>
  )
}

export default TittleList