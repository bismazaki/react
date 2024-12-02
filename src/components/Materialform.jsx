import { useState } from 'react';
import React  from 'react';
import {Button, TextField, InputLabel, FormControlLabel, Radio,RadioGroup, Select,  MenuItem} from '@mui/material';

const FormFiled = () => {
    var [uname, setuname] = useState("");
    var [email, setemail] = useState("");
    var [age, setage] = useState(0);
    var [dob, setdob] = useState(0);
    var [gen, setgen] = useState("");
    var [hob, sethob] = useState("");
    var [rel, setrel] = useState("");
    var [error, seterror] = useState(false);
    function handlesubmit(a){
        a.preventDefault();

        if(!uname && email && age && dob && gen && hob && rel){
            seterror(true);
        }
        else{
            seterror(false);
            console.log(uname);
            console.log(email);
            console.log(age);
            console.log(dob);
            console.log(gen);
            console.log(hob);
            console.log(rel);
        }
    }
  return (
    < >
      <h1>INFORMATION</h1>
      <form action="" onSubmit={handlesubmit}>
      <TextField label="Enter Username" variant='filled' placeholder='Enter Username' value={uname} type='text' sx={{my:2}} onChange={(e)=>{setuname(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
      <TextField label="Enter Your Email" variant='filled' placeholder='Enter Email' value={email} type='email' sx={{my:2}} onChange={(e)=>{setemail(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
      <TextField label="Enter Your Age" variant='filled' placeholder='Enter Age' value={age} type='number' sx={{my:2}} onChange={(e)=>{setage(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
      <TextField label="Enter Your Date Of Birth" variant='filled' placeholder='Enter DOB' value={dob} type='text' sx={{my:2}} onChange={(e)=>{setdob(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
    <InputLabel>Select Gender</InputLabel>
    <RadioGroup value={gen} name="gender" row  onChange={(e)=>{setgen(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}>
        <FormControlLabel control={<Radio/>} label="Male" value="m"/>
        <FormControlLabel control={<Radio/>} label="Female" value="fm"/>
        <FormControlLabel control={<Radio/>} label="Other" value="other"/>
    </RadioGroup><br/>
    <InputLabel>Select Your Religion</InputLabel>
    <RadioGroup sx={{margin: `auto`}}  value={rel} name="gender" row  onChange={(e)=>{setrel(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}>
        <FormControlLabel control={<Radio/>} label="Muslim" value="muslim"/>
        <FormControlLabel control={<Radio/>} label="Hindu" value="hindu"/>
        <FormControlLabel control={<Radio/>} label="Christian" value="christian"/>
        <FormControlLabel control={<Radio/>} label="Other" value="Other"/>
    </RadioGroup><br/>
    <InputLabel>Select Your Hobby</InputLabel>
    <Select value={hob} onChange={(e)=>{sethob(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}>
        <MenuItem value="Cricket">Cricket</MenuItem>
        <MenuItem value="Swimming">Swimming</MenuItem>
        <MenuItem value="Acting">Acting</MenuItem>
    </Select><br/>
      <Button sx={{mx:2}} type='submit' variant='contained' size='large'>Submit</Button>
      </form>
    </>
  )
}

export default FormFiled