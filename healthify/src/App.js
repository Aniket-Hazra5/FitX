import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Slider from './components/Slider'; 
import Diet from './components/Diet';




const App = () => {
  return (
    <>
      <Box width="400px" sx={{ width: {xl:'1488px'}}} m='auto' >
      <Navbar title="HealthifY" about="About"/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Slider />
        < Diet />
        <Footer />
        </Box> 
    
    </>
  );
}

export default App;
