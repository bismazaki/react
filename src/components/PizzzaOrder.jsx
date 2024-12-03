import { Typography , TextField,InputLabel,RadioGroup,FormControlLabel,Radio,Select,MenuItem, Checkbox,Button} from '@mui/material'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import React, { useState } from 'react'

const PizzaOrder = () => {
   var  [uname, setuname] = useState("");
   var [email, setemail] = useState("");
   var [phone, setphone] = useState("");
   var [address, setaddress] = useState("");
   var [size, setsize] = useState("");
   var [type, settype] = useState("");
   var [flavour, setflavour] = useState("");
   var [tik, settik] = useState("");
   var [error, seterror] = useState(false);

   function handlesubmit(a){
    a.preventDefault();

    if(!uname && email && phone && address && type && size && flavour && tik){
        seterror(true);
    }
    else{
        seterror(false);
        console.log(uname);
         console.log(email);
         console.log(phone);
        console.log(address);
        console.log(size);
        console.log(flavour);
        console.log(type);
    }
}
  return (
    <div className='full' style={{backgroundColor: `rgb(136, 109, 138)`, height: `100vh`}} >
 <div className='container' style={{ backgroundColor: `white`, border:`4px solid purple`,borderRadius:`10%`, width:`900px`, display:`flex`,  marginLeft:`30%`, justifyContent:`center`}}>
         <form action="" onSubmit={handlesubmit}>
         <Typography variant='h1' fontFamily="fantasy" color='secondary' >
        Pizza Ordering Form<LocalPizzaIcon  fontSize='large'/>
      </Typography>
      <TextField label="Enter Username" fullWidth variant='filled' placeholder='Enter Username' value={uname} type='text' sx={{my:2}} required
       onChange={(e)=>{setuname(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
       <TextField label="Enter Your Email" fullWidth variant='filled' placeholder='Enter Email' value={email} type='email' sx={{my:2}} required
       onChange={(e)=>{setemail(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
       <TextField label="Enter Your Phone Number" fullWidth variant='filled' placeholder='Enter Phone' value={phone} type='text' sx={{my:2}} required
       onChange={(e)=>{setphone(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
       <TextField label="Enter Your Address" fullWidth variant='filled' placeholder='Enter Address' value={address} type='text' sx={{my:2}} required
       onChange={(e)=>{setaddress(e.target.value)}} error={error} helperText={error ? "This Field is Required" : ""}/><br/>
       <InputLabel>Select Pizza Size:</InputLabel>
    <RadioGroup  sx={{justifyContent:`center` , my:2}} value={type} name="gender" row  onChange={(e)=>{settype(e.target.value)}} required error={error} helperText={error ? "This Field is Required" : ""}>
        <FormControlLabel control={<Radio/>}  label="Small" value="small"/>
        <FormControlLabel control={<Radio/>} label="Medium" value="medium"/>
        <FormControlLabel control={<Radio/>} label="large" value="large"/>
    </RadioGroup><br/>
    <InputLabel>Select Pizza flavour:</InputLabel>
    <Select value={flavour} onChange={(e)=>{setflavour(e.target.value)}} sx={{width: `100%`}} required error={error} helperText={error ? "This Field is Required" : ""}>
        <MenuItem value="Fajita">Fajita</MenuItem>
        <MenuItem value="Tikka">Tikka</MenuItem>
        <MenuItem value="Afghani Tikka">Afghani Tikka</MenuItem>
        <MenuItem value="Italian">Italian</MenuItem>
    </Select><br/>
    <InputLabel>Select Pizza Type:</InputLabel>
    <RadioGroup value={size} sx={{justifyContent:`center`,my:2}} name="gender" row  onChange={(e)=>{setsize(e.target.value)}} required error={error} helperText={error ? "This Field is Required" : ""}>
        <FormControlLabel control={<Radio/>} label="Thin" value="Thin"/>
        <FormControlLabel control={<Radio/>} label="Thick" value="Thick"/>
        <FormControlLabel control={<Radio/>} label="Crust" value="Crust"/>
    </RadioGroup><br/>
    <FormControlLabel value={tik} onChange={(e)=>{settik(e.target.value)}} required error={error} helperText={error ? "This Field is Required" : ""} label="Are You Sure You want to Order" control={<Checkbox/>} /> <br/>
    <Button sx={{my:3}} type='submit' fullWidth variant='contained' color='secondary' size='large'>Submit</Button>

         </form>
     
     
    </div>
    </div>
   
  )
}

export default PizzaOrder
