import React from 'react'
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
const Home = () => {
  return (
    <div className='py-6'>
      <Grid container spacing={2}>
        <Grid size={4}>

         
    <GroupList/>
         
        </Grid>
        <Grid size={4}>

         
    <GroupList/>
         
        </Grid>
        <Grid size={4}>

         
    <FriendList/>
         
        </Grid>
        <Grid size={4}>

         
      <UserList/>
         
        </Grid>





      </Grid>
    </div>
  )
}

export default Home
