import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Grid from '@mui/material/Grid';
import Searchbar from '../Componets/Searchbar';
import TittleList from '../Componets/TittleList';
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import MakeProfile from '../Componets/MakeProfile';
import GroupList from '../Layouts/GroupList';
import FriendList from '../Layouts/FriendList';
import UserList from '../Layouts/UserList';
import BlockedList from '../Layouts/BlockedList';
import MyGroupList from '../Layouts/MyGroupList';
import FriendRequestList from '../Layouts/FriendRequestList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  let navigate=useNavigate()

  let data=useSelector(state=>(state.activeuser.value)
  )
  useEffect(()=> {
   if (data===null)
   {
    // console.log("data nai");
      navigate("/")
   }
  },[])
  return (
    <div className='py-6'>
      <Grid container spacing={2}>
        <Grid size={4}>


          <GroupList/>

        </Grid>
        <Grid size={4}>


          <FriendList/>

        </Grid>
        <Grid size={4}>


          <UserList/>

        </Grid>
        <Grid size={4}>


          <FriendRequestList/>

        </Grid>
        <Grid size={4}>


          <MyGroupList/>

        </Grid>
        <Grid size={4}>


          <BlockedList/>

        </Grid>





      </Grid>
    </div>
  )
}

export default Home
