import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Grid from '@mui/material/Grid';
import Searchbar from '../Componets/Searchbar';
import TittleList from '../Componets/TittleList';
import Image from '../Componets/Image';
import cr7 from '../assets/cr7.png.jpg';
import MakeProfile from '../Componets/MakeProfile';
const Home = () => {
  return (
   <div className='py-6'>
       <Grid container  spacing={2}>
        <Grid size={4}>
       
   <Searchbar/>

   <div  className='py-4  px-5 rounded-[20px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]' > 
    <div className='flex flex-col gap-3' >
       <TittleList tittle={`Group List`}  />
     <MakeProfile  mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`}  />
     <MakeProfile  mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`}  />
     <MakeProfile  mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`}  />
     <MakeProfile  mainClassname={`py-3`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`}  />
     <MakeProfile  mainClassname={`py-3 border-transparent`} profileImage={cr7} profileName={`Cristino Ronaldo`} profilStatus={`Hi Guys, Wassup! Suuuuuiiiii`} buttonText={`Join`}  />
    </div>
   </div>
        </Grid>
      
       
      
      
    
      </Grid>
   </div>
  )
}

export default Home
