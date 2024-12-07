import { Call, Home, Person2Sharp, Phone, StoreMallDirectory, Update } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'

const BottomNav = () => {
    var [bottom , setbottom] = useState(0);
    var [tab , settab] = useState("1");
    var image_bottom=[
        "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg",
        "https://images.pexels.com/photos/821718/pexels-photo-821718.jpeg?cs=srgb&dl=pexels-alex-andrews-271121-821718.jpg&fm=jpg",
        "https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=612x612&w=0&k=20&c=Zm1MthU_G_LzfjBFBaMORRnuBhMsCjPQ38Ksfg4zl9g=",
        "https://media.istockphoto.com/id/1302583496/vector/phone-icon-symbol-set-smartphone-old-phone-logo-sign-shape-collection-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZxLwqwNROCbTB6gRX0GltFtYBRIwuFPGG68__XO4llQ="
    ]
    var type=[
        "Home Page:",
        "My Updates:",
        "Community Page:",
        "Call Page:"
    ]
  return (
    <>
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        padding:0
    }}>
        <Tabs value={tab} onChange={(e , index)=>{settab(index);}} indicatorColor='secondary' >
            <Tab label="Home" icon={<Home/>} value={"1"}/>
            <Tab label="Story" icon={<StoreMallDirectory/>}  value={"2"}/>
            <Tab label="Call" icon={<Call/>} value={"3"}/>
        </Tabs>
    </Box>
    <Typography variant='h2' fontFamily={'cursive'} color='secondary'>
    {`${type[bottom]}`}
    </Typography>
    <img src={`${image_bottom[bottom]}`} alt="image..." width={`40%`} height={`600px`} style={{marginTop: `5%`}} />
    <BottomNavigation value={bottom} onChange={(e , index)=>{setbottom(index);}} showLabels sx={{position:`fixed` , left:0, right:0, bottom:0, 
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(140,75,121,0.8099614845938375) 35%, rgba(67,105,112,1) 100%)"
    }}>
        <BottomNavigationAction label="Home" icon={<Home/>} sx={{color: `whitesmoke`}} ></BottomNavigationAction>
        <BottomNavigationAction label="Updates" icon={<Update/>} sx={{color: `whitesmoke`}}></BottomNavigationAction>
        <BottomNavigationAction label="Communities" icon={<Person2Sharp/>} sx={{color: `whitesmoke`}}></BottomNavigationAction>
        <BottomNavigationAction label="Call" icon={<Phone/>} sx={{color: `whitesmoke`}}></BottomNavigationAction>
    </BottomNavigation>
    </>
  )
}

export default BottomNav