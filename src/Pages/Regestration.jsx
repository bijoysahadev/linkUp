import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Image from '../Componets/Image'
import TextField from '@mui/material/TextField';
import Login from "../assets/signUp.png";
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ButtonCustomize = styled(Button) ({
 padding : '20px 0px',
 width : "80%",
 background: '#5B36F5',
 fontSize : "20px",
 fontWeight : "600",
 fontFamily: "",
 borderRadius : "87px",
 textTransform : "capitalize",
  marginTop : '51px',
  marginBottom : '31px'
})
const TextFieldCustomize = styled(TextField) ({
  marginTop :  '30px',
   width : '80%',
   borderRadius : '10px',
   borderWidth : '0px',
     '& .MuiInput-underline:after': {
    borderBottomWidth: '0px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '1px',
      borderRadius : '14px'
    },
    '&:hover fieldset': {
      borderWidth: '1px',
          borderRadius : '14px'
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
          borderRadius : '14px'
    },
    '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  }
})



const Regestration = () => {
  let [email,setEmail]=useState ("")
  let [name,setName]=useState(" ")
  let [password,setPassword]=(" ")
  return (
   <>
   <Grid container spacing={2}>
        <Grid size={6}>
        <div className='flex items-center justify-end h-screen '>
    
           <div className='w-140' >
          <h1 className='text-[#11175D]  font-bold text-[34px] ' >Get started with easily register</h1>
          <p className='  curspor-pointer text-[20px] pt-3 pb-10 font-black font-normal' >Free register and you can enjoy it</p>
            <TextFieldCustomize  value={name} onChange={()=>setEmail(e.target.value)} type='text' id="Email Address"
            label="Email Address" variant="outlined" />
            <TextFieldCustomize  onChange={()=>setName(e.target.value)} type='text'  id="outlined-basic" label="Ful name" variant="outlined" />
            <TextFieldCustomize   onChange={()=>setPassword(e.target.value)} type='password' id="outlined-basic" label="Password" variant="outlined" />
            <br />
            <ButtonCustomize variant="contained">Sign up</ButtonCustomize>
           <div className='w-8/12' >
             <p className='  text-center   text-sm text-[#03014C] font-normal  ' >Already  have an account ?   <Link to="/Login" ><span className='text-[#EA6C00]'>Sign In</span></Link>  </p>
           </div>
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
