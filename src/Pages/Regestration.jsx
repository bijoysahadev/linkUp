import React from 'react'
import Grid from '@mui/material/Grid';
import Image from '../Componets/Image'
import TextField from '@mui/material/TextField';
import Login from "../assets/signUp.png";
import Button from '@mui/material/Button';
const Regestration = () => {
  return (
   <>
   <Grid container spacing={2}>
        <Grid size={6}>
        <div className='flex items-center justify-end h-screen '>
           <div className='w-130' >
          <h1 className='text-[#11175D]  font-bold text-[34px] ' >Get started with easily register</h1>
          <p className='text-[20px] pt-3 pb-10 font-black font-normal' >Free register and you can enjoy it</p>
            <TextField  sx={{width:"80%"}}   id="Email Address" label="Email Address" variant="outlined" />
            <TextField  sx={{width:"80%"}}   id="outlined-basic" label="Ful name" variant="outlined" />
            <TextField  sx={{width:"80%"}}   id="outlined-basic" label="Password" variant="outlined" />
            <br />
            <Button variant="contained">Sign up</Button>
            <p>Already  have an account ? Sign In</p>
        </div>
        </div>
        </Grid>
        <Grid size={6}>
           <Image  className={`w-full h-screen object-cover`}  src={Login}/>
        </Grid>
     
        
      </Grid>
   </>
  )
}

export default Regestration
