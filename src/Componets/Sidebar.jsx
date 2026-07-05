import React from 'react'
import Profile from '../assets/Profile.jpg';
import { IoHomeOutline } from "react-icons/io5";
import Image from './Image';
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotificationsOff } from "react-icons/io5"; 
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
const Sidebar = () => {
  let handleList = ()=> {
    console.log("clicked");
    
  }
  return (
    <div className='w-full h-screen flex justify-center items-center ' >
      <div className='bg-[#5F35F5] w-[82%] h-[92%]   rounded-[20px] flex flex-col items-center justify-between py-10'  >
        <div className='w-25 h-25 rounded-full' > 
          <Image   src={Profile} className={`w-full h-full rounded-full`} /> </div>
        <div  className=''   >
          <ul className='flex flex-col gap-y-10 '   >
            <li onClick={handleList} className='text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  after:bg-[white] after:content-[""]  after:rounded-l-md text-[#5F35F5]  after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 before:bg-[#5F35F5] before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19 ' >  <IoHomeOutline  className='relative top-0 left-0 z-10'   /></li>
            <li onClick={handleList} className='text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  after:bg-[white] after:content-[""]  after:rounded-l-md text-[#5F35F5]  after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 before:bg-[#5F35F5] before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19 ' >  <LuMessageCircleMore  className='relative top-0 left-0 z-10' /></li>
            <li onClick={handleList} className='text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  after:bg-[white] after:content-[""]  after:rounded-l-md text-[#5F35F5]  after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 before:bg-[#5F35F5] before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19 ' > <IoNotificationsOff  className='relative top-0 left-0 z-10'   /></li>
            <li onClick={handleList} className='text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  after:bg-[white] after:content-[""]  after:rounded-l-md text-[#5F35F5]  after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 before:bg-[#5F35F5] before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19 ' >  <IoSettingsOutline   className='relative top-0 left-0 z-10'  /> </li>
          
           
          </ul>
        </div>
        <div>
          <ul>
               <li onClick={handleList} className='text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  after:bg-[white] after:content-[""]  after:rounded-l-md text-[#5F35F5]  after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 before:bg-[#5F35F5] before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19 ' >  <LuLogOut   className='relative top-0 left-0 z-10' />  </li>
          </ul>
        
        </div>
       
      </div>
    </div>
  )
}

export default Sidebar