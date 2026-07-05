import React from 'react'
import Grid from '@mui/material/Grid';
import { BsThreeDotsVertical } from "react-icons/bs";
const TittleList = ({tittle,className}) => {
  return (
  
     <div  > 
       <div className={` rounded-[20px] flex items-center justify-between   ${className} `} >
            <h3 className='text-base text-black font-semibold ' >{tittle}</h3>
       <BsThreeDotsVertical   className='text-[#5F35F5] text-sm   ' />
       </div>
     </div>
  )
}

export default TittleList