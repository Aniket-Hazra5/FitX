import React from 'react'
import {Box,Button,Typography} from '@mui/material';







const SetGoal = () => {
  return (
    <Box sx={{textAlign:'center'}} marginTop = '100px' marginBottom='100px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '35px' } }} mb="49px" textAlign="center">
        Connect Your <span className='watch'>Smart Watch</span></Typography>
        <Button href='/Slider' className="connect-btn" sx={{ bgcolor: '#575759', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '90px' }, height: '56px', position: 'relative', marginLeft:'px', fontSize: { lg: '20px', xs: '14px' } }}>
          Connect</Button>
    </Box>
  )
}


export default SetGoal;