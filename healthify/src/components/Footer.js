// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/Logo.png';

// const Footer = () => (
//   <Box mt="80px" bgcolor="#575759" >
//     <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
//       <img src={Logo} alt="logo" style={{ width: '42px', height: '41px' }} />
//     </Stack>
//     <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px" color='white'>copyright FitX  Contact Us Feedback Community Blog </Typography>
//   </Box>
// );

// export default Footer;

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h3>About Us</h3>
            <p>We are a fitness community dedicated to helping people achieve their fitness goals.</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>123 Main St</li>
              <li>Anytown, USA 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@fitnesswebsite.com</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Join Our Newsletter</h3>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">&copy; 2023 HardCore. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
