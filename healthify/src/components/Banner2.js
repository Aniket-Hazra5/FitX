import React from 'react'
import HomePic from '../assets/images/HomePic.jpg';
import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';


export default function Banner2() {
  return (
    <>
    <div className='d-flex flex-sm-row flex-column'>
        <div className='home-text'>
           <Box className='container' sx={{
        mt: {lg: '200px', xs: '70px'}/*, flexDirection:{xs:'col',sm:'col',md:'row',lg:'row',xl:'row'}*/
    }}> <Typography className='' 
            color="#004EFF" fontWeight="600" fontSize="26px"
            >
            HealthifY
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}>Sweat,Smile <br /> & Repeat</Typography>
        <Typography className="sub-text" fontSize="18px" lineHeight="30px" mb={3}>Your all in one fitness tracker which understands YOU</Typography></Box>
        <div className='explore'><Button variant="contained" href='#Exercises'>Explore</Button><div><Typography
    fontWeight={600}
    color="#004EFF"
    sx={{
        opacity: 0.1,
        display: {lg: 'block',xs: 'none'}
    }}
    fontSize="150px">Exercise</Typography></div></div></div>
        
        <img src={HomePic} alt="Fitness Banner" className='rounded float-right w-50 ' sx={{ mt: {lg: '200px', xs: '70px'}}}/>
    </div>
    
    </>
  )
}
