import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Image from '../Componets/Image'
import TextField from '@mui/material/TextField';
import login from "../assets/login.png";
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { log } from 'firebase/firestore/pipelines';
import { getAuth, signInWithEmailAndPassword  ,signInWithPopup, GoogleAuthProvider,sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { CircularProgress } from 'react-loader-spinner';
import { getDatabase, push, ref, set } from "firebase/database";
import { useDispatch } from 'react-redux';
import { activeuser } from '../slices/userinfoslice';





const provider = new GoogleAuthProvider();

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
const ForgetButtonCustomize = styled(Button)({
  padding: '15px 0px',
  width: "80%",
  background: '#5B36F5',
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "",
  borderRadius: "87px",
  color : "white",
  marginTop: '51px',
  marginBottom: '31px'
})
const TextFieldCustomize = styled(TextField)({
  marginTop: '50px',
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



const Login = () => {
  const dispatch=useDispatch()
   const db = getDatabase();
  const auth = getAuth();
  const navigate=useNavigate()
  let [email, setEmail] = useState("")
  let [forgetEmail,setForgetEmail]=useState(" ")
  let [password, setPassword] = useState("")
  let [emailError, setEmailError] = useState("")
  let [passwordError, setPasswordError] = useState("")
  let [loader, setLoader] = useState(false)
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  let [show,setShow]=useState(false)
  let handleSend = (e)=>{
    //  console.log("reset email");
     sendPasswordResetEmail(auth, forgetEmail)
  .then((result) => {
    console.log(result);
    if (result===null) {
      toast.error("invalid-credentials")
    }
  
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode.includes("auth/invalid-email"))
 console.log(errorCode); {
toast.error("invalid-credentials")}
 
  });
    
  }
  let handleForgetPassword= ()=> {
   setShow(true)
    
  }
  let  handleGoogle= ()=> {
    

  signInWithPopup(auth, provider)
  .then((result) => {
    set(push(ref(db, 'userlist/' )), {
        username: result.user.displayName,
        email: result.user.email,
        profile_picture : "https://i.ibb.co.com/mVhLkdLD/avatar.webp"
      });
            
  navigate("/Home")
    
 
  }).catch((error) => {
    console.log(error);
    
   
  });
    
  }
  
  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError("")
  }
  let handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError("")
  }
  let handleLogin = () => {

    if (!email) {
      setEmailError("value nai")

    }
    if (!password) {
      setPasswordError("give me your password")
    }
    else if (!emailRegex.test(email)) {
      setEmailError("give me a valid email")
    }
    if (!passwordRegex.test(password)) {
      setPasswordError("Enter a valid password")
      setLoader(false)
    } if (!passwordRegex.test(password)) {
      setPasswordError("Enter a valid password")

    }
    if (email && password && emailRegex.test(email)) {
      // console.log("login successfull");
  setLoader(true);
 
      // 
  
     

      // 

    }
     signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if  (userCredential.user.emailVerified) {

            toast.success("Login Successfully")
            setLoader(false)
                navigate("/Home")
                dispatch(activeuser())
                localStorage.setItem("userinfo",JSON.stringify(userCredential.user ))
              
                
          }
     else {
      toast.error("Please verify Your Email")
       setLoader(false)
     }
        })
        .catch((error) => {
          setLoader(false)
          const errorCode = error.code;
           console.log(errorCode);
           if (errorCode.includes("auth/invalid-credential"))
            toast.error("invalid credientails");
            
            

        });
  }
  return (
    <>  
    {
       show   ? <div  className=' absolute top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center'>
          <div className=' rounded-sm w-[600px] py-[100px] px-[20px] bg-amber-50' >
            <h2 className='text-4xl text-center font-black font-bold' >Forget Your Password </h2>
             <TextFieldCustomize  onChange={()=> setForgetEmail(e.target.value)} type='email'  placeholder='Enter your name'   id="standard-basic" label="Enter Your Email" variant="standard" />
           <div className='flex gap-x-4' >
              <ForgetButtonCustomize onClick={()=> setShow(false)} >
          
                   Back To Login
             </ForgetButtonCustomize>
             <ForgetButtonCustomize onClick={handleSend} >
                 Send
             </ForgetButtonCustomize>
           </div>
          </div>
      </div>
         :  <Grid container spacing={2}>
        <Grid size={6}>
          <div className='flex items-center justify-end h-screen '>
            <div className='w-140    '>
              <h1 className='text-[#11175D]  font-bold text-[34px] ' >Login to your account!</h1>
              <Button   onClick={handleGoogle}  sx={{ padding: "12px 30px ", marginTop: "20px " }} variant="outlined" startIcon={<FcGoogle />}>
                Login with Google
              </Button>
              <TextFieldCustomize onChange={handleEmail} type='email' value={email} placeholder='Enter your name' id="standard-basic" label="Email Addres" variant="standard" />
              {
                emailError && <p className='bg-red-500 w-4/5 py-2 rounded-[10px] px-2  mt-2 text-white' >{emailError}</p>
              }
              <TextFieldCustomize onChange={handlePassword} value={password} type='password' id="standard-basic" label="Password" placeholder='Enter Your Password' variant="standard" />
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
                /> : <ButtonCustomize onClick={handleLogin} variant="contained">Login</ButtonCustomize>
              }
              <p  onClick={handleForgetPassword} className=' ml-24 mb-10 text-base cursor-pointer text-black font-bold' >Forget Password</p>

              <p className=' ml-16  cursor-pointer  text-start   text-sm text-[#03014C] font-normal  ' >Don’t have an account ?
                 <Link to={"/Regestration"}><span className='text-[#EA6C00]'>Sign up  </span>
               </Link> 
               </p>
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
          </div>
        </Grid>
        <Grid size={6}>
          <Image className={`w-full h-screen object-cover`} src={login} />
        </Grid>


      </Grid>
    }
    
    
     
    </>
  )
}

export default Login
