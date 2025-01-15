import React ,{useState} from 'react'
import '../Login.css'
import { Checkbox, FormControl, FormControlLabel, TextField, Typography, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Facebook, GitHub, Google, Twitter } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className="container">
        <div className="row myrow">
          <div className="col-md-5">
            <FormControl fullWidth >
            <Typography variant='h2' fontStyle={'italic'} fontFamily={'monospace'}><AccountCircleIcon fontSize='10'/>Login</Typography>
           <TextField label="Enter Email Address" type='email' color='primary' fullWidth placeholder='Enter Email' sx={{marginTop:`30px`}}/> 
           <TextField label="Enter Your Password" type='password' color='primary' fullWidth placeholder='Enter Password' sx={{marginTop:`30px`}}/> 
           <FormControlLabel sx={{marginTop:`25px`}} label="Remember Me" control={<Checkbox/>}/>
           <p style={{marginLeft: `40%`, marginTop:`10px`, color: `blue`, fontSize:`18px`}}> <b>Forget Your Password?</b></p>

           <Button sx={{my:2 , fontSize:`18px`}} type='submit' fullWidth variant='contained' color='primary' size='large'>Login</Button>
           <p style={{color:`grey`}}>Don't Have An Account <b style={{color:`blue`}}>Signup</b></p>
           <div style={{backgroundColor:`lightgray`, height:`37px`}}>
            <p style={{marginLeft:`5%`}}>OR Login With <span style={{marginLeft:`35%`, fontSize:`20px`}}><Facebook/><Google/> <GitHub/><Twitter/></span> </p>
           </div>
            </FormControl>
          

            </div>
          <div className="col-md-5">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiJE-tIOKbJviJa71P-Upo2ueDl1TjNu02rhMGRb4ei2UNOK1sPmKpnAeD9P9tAypFFM&usqp=CAU" alt="..login" height={550} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
