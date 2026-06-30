import React from 'react'
import Profile from '../assets/Profile.jpg';
import { IoHomeOutline } from "react-icons/io5";
import Image from './Image';
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotificationsOff } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
const Sidebar = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center ' >
      <div className='bg-[#5F35F5] w-[82%] h-[92%]   rounded-[20px] flex flex-col items-center justify-between py-10'  >
        <div className='w-25 h-25 rounded-full' > 
          <Image   src={Profile} className={`w-full h-full rounded-full`} /> </div>
        <div  className=''   >
          <ul className='flex flex-col gap-y-10 '   >
            <li>  <IoHomeOutline  className='text-5xl   text-white' /></li>
            <li>  <LuMessageCircleMore className='text-5xl text-white '  /></li>
            <li> <IoNotificationsOff  className='text-5xl  text-white'  /> </li>
            <li>  <IoSettingsOutline className='text-5xl text-white '  />   </li>
           
          </ul>
        </div>
        <div>
          <ul>
            <li><LuLogOut  className='text-5xl text-white' /></li>
          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Sidebar