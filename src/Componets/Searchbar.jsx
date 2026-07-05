import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
  return (
         <div className= ' relative w-full rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-white' >
          <CiSearch  className='absolute top-1/2 -translate-y-1/2 left-4 text-base  '  />
         
          <input    className=' placeholder:text-sm placeholder:text-blue-600  px-12 outline-0 w-full py-4 rounded-[20px] ' type="text"  placeholder='Search' />
           <BsThreeDotsVertical className='absolute top-1/2    -translate-y-1/2 right-4 text-xs text-black '  />
         </div>
  )
}

export default Searchbar