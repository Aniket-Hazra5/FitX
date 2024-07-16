import React from 'react';
import { Box } from "@mui/system";
// import HeroBanner from '../components/HeroBanner';
import SetGoal from '../components/SetGoal';
import Banner2 from '../components/Banner2'
import HorizontalScrollbar from '../components/HorizontalScrollbar';
import Card from '../components/Card';
import About from '../components/About';


const Home = () => {
  // const [exercises, setExercises] = useState([]);
  // const [bodyPart, setBodyPart] = useState('all');
  return (
    <>
    <Box><Banner2 />
    <About />
    <SetGoal />
    {/* <SearchExercises setExercises={setExercises}
    bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises setExercises={setExercises}
    bodyPart={bodyPart}
    exercises={exercises} /> */}
    <HorizontalScrollbar />
    <Card />  
    </Box>
  </>
  );
};

export default Home;