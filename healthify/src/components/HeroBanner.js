import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HomePic from '../assets/images/HomePic.jpg';

const HeroBanner = () => {
  return (
    <div className='d-flex flex-sm-row flex-column'>
    <Box className='container' sx={{
        mt: {lg: '200px', xs: '70px'}/*, flexDirection:{xs:'col',sm:'col',md:'row',lg:'row',xl:'row'}*/
    }}>
        <Box classname="text"><Typography color="#004EFF"
        fontWeight="600" fontSize="26px">
            HardCore
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}>Sweat,Smile <br /> & Repeat</Typography>
        <Typography fontSize="18px" lineHeight="30px" mb={3}>Your all in one fitness tracker which understands YOU</Typography>
        <Button variant="contained" href='#Exercises'>Explore</Button></Box>
        <img src={HomePic} alt="Fitness Banner" className='image-fluid w-50 ' sx={{ mt: {lg: '200px', xs: '70px'}}} /*className='home-pic' sx={{ mt: {lg: '200px', xs: '70px'}}}*//>
        
    </Box>
    </div>
  )
}

export default HeroBanner