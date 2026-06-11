import React from 'react'
import Grid from '@mui/material/Grid';
import Image from '../Componets/Image'
import TextField from '@mui/material/TextField';
import login from "../assets/login.png";
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { FcGoogle } from "react-icons/fc";
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
  marginTop :  '50px',
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



const Login = () => {
  return (
   <>
   <Grid container spacing={2}>
        <Grid size={6}>
        <div className='flex items-center justify-end h-screen '>
           <div className='w-140' >
          <h1 className='text-[#11175D]  font-bold text-[34px] ' >Login to your account!</h1>
          <Button sx={{padding: "12px 30px ", marginTop: "20px "}} variant="outlined" startIcon={<FcGoogle />}>
        Login with Google
      </Button>
              <TextFieldCustomize   type='email' placeholder='Enter your name' id="standard-basic" label="Email Addres" variant="standard" />
              <TextFieldCustomize  type='password' id="standard-basic" label="Password" placeholder='Enter Your Password'   variant="standard" />
            <br />
            <ButtonCustomize variant="contained">Login to Continue</ButtonCustomize>
            <p  className=' ml-24 mb-10 text-base cursor-pointer text-black font-bold' >Forget Password</p>
          
             <p className=' ml-16  cursor-pointer  text-start   text-sm text-[#03014C] font-normal  ' >Don’t have an account ? <Link to={"/Regestration"}><span className='text-[#EA6C00]'>Sign up  </span> </Link> </p>
        
        </div>
        </div>
        </Grid>
        <Grid size={6}>
           <Image  className={`w-full h-screen object-cover`}  src={login}/>
        </Grid>
     
        
      </Grid>
   </>
  )
}

export default Login
