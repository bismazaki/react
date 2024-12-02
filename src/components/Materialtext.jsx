import React, { useState } from 'react'
import {Button, TextField} from '@mui/material';

const Textfield = () => {
    var [fname, setfname] = useState("");
    var [Lname, setLname] = useState("");
    var [error, seterror] = useState(false);
    function handlesubmit(a){
        a.preventDefault();

        if(!fname && Lname){
            seterror(true);
        }
        else{
            seterror(false);
            alert(fname + Lname);
        }
    }
  return (
    <div>
      <h1>Input Fields</h1>
      <form action="" onSubmit={handlesubmit}>
        <TextField label="Enter First Name" variant='filled' placeholder='Enter Your First Name' value={fname} type='text' sx={{my:2}} onChange={(e)=>{setfname(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
        <TextField label="Enter Last Name" variant='filled' placeholder='Enter Your First Name' value={Lname} type='text' sx={{my:2}}  onChange={(e)=>{setLname(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
        <Button type='submit' variant='contained' size='large'>Submit</Button>
      </form>
    </div>
  )
}

export default Textfield