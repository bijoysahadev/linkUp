import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Image from '../Componets/Image'
import TextField from '@mui/material/TextField';
import Login from "../assets/signUp.png";
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { log } from 'firebase/firestore/pipelines';
import { CircularProgress } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import { getDatabase, push, ref, set } from "firebase/database";

import Avatar from '../assets/avatar.jpg';



const ButtonCustomize = styled(Button)({
  padding: '20px 0px',
  width: "80%",
  background: '#5B36F5',
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "",
  borderRadius: "87px",
  textTransform: "capitalize",
  marginTop: '51px',
  marginBottom: '31px'
})
const TextFieldCustomize = styled(TextField)({
  marginTop: '30px',
  width: '80%',
  borderRadius: '10px',
  borderWidth: '0px',
  '& .MuiInput-underline:after': {
    borderBottomWidth: '0px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: '1px',
      borderRadius: '14px'
    },
    '&:hover fieldset': {
      borderWidth: '1px',
      borderRadius: '14px'
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderRadius: '14px'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
  }
})



const Regestration = () => {
   const db = getDatabase();
  const auth = getAuth();
  let [loader, setLoader] = useState(false)
  let [email, setEmail] = useState("")
  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [emailError, setemailError] = useState("")
  let [nameError, setNameError] = useState("")
  let [passwordError, setPasswordError] = useState("")
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let handleEmail = (e) => {
    setEmail(e.target.value)
    setemailError("")

  }

  let handleName = (e) => {
    setName(e.target.value)
    setNameError("")

  }
  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError("")
  }
  let handleSignUp = () => {
    if (!email) {
      setemailError("Give me your email please")
    }
    if (!emailRegex.test(email)) {
      setemailError("give me a valid email")
    }
    if (!name) {
      setNameError("give me your name");

    }
    if (!password) {
      setPasswordError("give me your password")
    }
    if (!passwordRegex.test(password)) {
      setPasswordError("Enter a valid password")
      setLoader(false)
    }
    if (email && emailRegex.test(email) && name && password) {
      console.log("database e data jabe");

    }
    setLoader(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);

             sendEmailVerification(auth.currentUser)
          .then(() => {
            set(ref(db, 'userlist/'  + userCredential.user.uid), {
    username: name,
    email: email,
    profile_picture : "https://i.ibb.co.com/mVhLkdLD/avatar.webp"

  })
  ;
        
            
          setLoader(false);
          toast.success("Regestration Successfully")
          });
       
    
 
      })

      .catch((error) => {
        const errorCode = error.code;
        setLoader(false)
        if (errorCode.includes("auth/weak-password"))
          setPasswordError("your password is so much weak");
        if (errorCode.includes("auth/email-already-in-use")) {
          setemailError("email already in use");

        }
        console.log(errorCode);

        // ..
      });





  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={6}>
          <div className='flex items-center justify-end h-screen '>

            <div className='w-140' >
              <h1 className='text-[#11175D]  font-bold text-[34px] ' >Get started with easily register</h1>
              <p className='  curspor-pointer text-[20px] pt-3 pb-10 font-black font-normal' >Free register and you can enjoy it</p>
              <TextFieldCustomize value={email} onChange={handleEmail} type='text' id="Email Address"
                label="Email Address" variant="outlined" />
              {
                emailError && <p className='bg-red-500 w-4/5 py-2 rounded-[10px] px-2  mt-2 text-white' >{emailError}</p>
              }
              <TextFieldCustomize value={name} onChange={handleName} type='text' id="outlined-basic" label="Ful name" variant="outlined" />
              {
                nameError && <p className='bg-red-500 w-4/5 py-2 rounded-[10px] px-2  mt-2 text-white' >{nameError}</p>
              }
              <TextFieldCustomize value={password} onChange={handlePassword} id="outlined-basic" label="Password" variant="outlined" />
              {
                passwordError && <p className='bg-red-500 w-4/5 py-2 rounded-[10px] px-2  mt-2 text-white' >{passwordError}</p>
              }
              <br />
              {
                loader ? <CircularProgress
                  height="100"
                  width="100"
                  color="#4fa94d"
                  ariaLabel="circular-progress-loading"
                  wrapperStyle={{
                    display: 'flex', justifyContent: 'center', textAlign: 'center',
                    alignItems: 'center', width: '100%',
                    margin: '20px 0'
                  }}
                  wrapperClass="wrapper-class"
                  visible={true}
                  strokeWidth={2}
                  animationDuration={1}
                /> : <ButtonCustomize onClick={handleSignUp} variant="contained">Sign up</ButtonCustomize>
              }
              <div className='w-8/12' >
                <p className='  text-center   text-sm text-[#03014C] font-normal  ' >Already  have an account ?   <Link to="/" ><span className='text-[#EA6C00]'>Sign In</span></Link>  </p>
              </div>
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"

            />
          </div>
        </Grid>
        <Grid size={6}>
          <Image className={`w-full h-screen object-cover`} src={Login} />
        </Grid>


      </Grid>
    </>
  )
}

export default Regestration
