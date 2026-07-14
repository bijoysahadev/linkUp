import React, { useEffect, useState } from 'react'
import Profile from '../assets/Profile.jpg';
import { IoHomeOutline } from "react-icons/io5";
import Image from './Image';
import { LuMessageCircleMore } from "react-icons/lu";
import { IoNotificationsOff } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";
const Sidebar = () => {
  let location = useLocation()
  let active = (location.pathname.replace("/", ""));
  let [alluser,setAlluser]=useState([])
  const db = getDatabase()
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
  //  let [active,setActive]=useState(false)
  // let handleList = (name)=> {
  //   console.log(name);


  //   // setActive(true)

  // }
  console.log(alluser);
  
  return (
    <div className='w-full h-screen flex justify-center items-center ' >
      <div className='bg-[#5F35F5] w-[82%] h-[92%]   rounded-[20px] flex flex-col items-center justify-between py-10'  >
 {
  alluser.map(item=> (
           <div className='w-25 h-25 rounded-full' >
          <Image src={item.profile_picture} className={`w-full h-full rounded-full`} /> </div>
  ))
 }
        <div className=''   >
          <ul className='flex flex-col gap-y-10 '   >
            <Link to='Home' >
            <li className={`text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  ${active =="Home" ? "after:bg-[white]" : "after:bg-transparent"} after:content-[""]  after:rounded-l-md ${active == "Home" ? "text-[#5F35F5] " : "text-white"} after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 ${active =="Home" ? "before:bg-[#5F35F5]" : "bg-transparent"} before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19`} >  <IoHomeOutline className='relative top-0 left-0 z-10' /></li>

            </Link>

          <Link to="Message" >
            <li className={`text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  ${active=="Message" ? " after:bg-[white]" : "after:bg-transparent"}  after:content-[""]  after:rounded-l-md ${active == "Message" ? "text-[#5F35F5] " : "text-white"} after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25  ${active=="Message" ? "before:bg-[#5F35F5] " : "before:bg-transparent"} before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19`} >  <LuMessageCircleMore className='relative top-0 left-0 z-10' /></li></Link>







           <Link to="NotificationPage" >
            <li className={`text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  ${active=="NotificationPage" ? "after:bg-[white]" : "after:bg-transparent"} after:content-[""]  after:rounded-l-md  ${active=="NotificationPage" ? "text-[#5F35F5]  " : "text-white"} after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25  ${active=="NotificationPage" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19`} > <IoNotificationsOff className='relative top-0 left-0 z-10' /></li>
</Link>
          <Link to="Setting" >
            <li className={`text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  ${active=="Setting" ? "after:bg-[white] " : "after:bg-transparent"} after:content-[""]  after:rounded-l-md ${active=="Setting" ? "text-[#5F35F5]  " : "text-white"} after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25  ${active=="Setting" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19`}>  <IoSettingsOutline className='relative top-0 left-0 z-10' /> </li></Link>


          </ul>
        </div>
        <div>
          <ul>
            <Link to="Logout" >
            <li className={`text-5xl   relative  after:absolute after:left-[67px] after:top-1/2  after:w-[160px] after:h-16  ${active=="Logout" ? "after:bg-[white] " : "after:bg-transparent"} after:content-[""]  after:rounded-l-md ${active=="Logout" ? "text-[#5F35F5]" : "text-white"}  after:-translate-1/2   before:absolute before:top-1/2 before:-translate-y-1/2  before:-right-25 ${active=="Logout" ? "before:bg-[#5F35F5]" : "before:bg-transparent"} before:w-[10px] before:h-16 before:content-[""]  before:rounded-l-xl  before:z-19 `}>  <LuLogOut className='relative top-0 left-0 z-10' />  </li></Link>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Sidebar