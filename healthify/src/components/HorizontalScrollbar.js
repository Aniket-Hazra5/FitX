import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {Typography } from '@mui/material';

// import ExerciseCard from './ExerciseCard';
// import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icon/right-arrow.png';
import LeftArrowIcon from '../assets/icon/left-arrow.png';
import Chest from '../assets/images/chest.jpg';
import Back from '../assets/images/back.jpg';
import Shoulder from '../assets/images/shoulder.jpg';
import Biceps from '../assets/images/biceps.jpg';
import Triceps from '../assets/images/triceps.jpg'
import Leg from '../assets/images/leg.jpg';
import Traps from '../assets/images/traps.jpg';
import Forearms from '../assets/images/forearms.jpg';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} classNameName="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} classNameName="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = () => {
  return (
    <><hr className='line' />
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {/* {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box> */}
      <div className="video-container">
    <a href="https://www.youtube.com/watch?v=r0PhmnYo-us">
      <div className="video">
        <img src={Chest} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              Chest Workout for Pump
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=HRy3m2ck2kg">
      <div className="video">
        <img src={Back} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              Complete Back Workout
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=ojj_12KcS_E">
      <div className="video">
        <img src={Shoulder} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              Get Bigger Shoulders
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=Wwwymot4xfE">
      <div className="video">
        <img src={Triceps} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              Best Triceps Workout 2023
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=zvX18lFm9IM">
      <div className="video">
        <img src={Biceps} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              5 New Biceps Workout For Bigger Arms
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=wQY9YkWYlQg">
      <div className="video">
        <img src={Leg} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              How to Train Legs
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=tUIHISxQ8DM">
      <div className="video">
        <img src={Traps} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              4 Best Traps Exercises
            </h3>
          </div>
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/watch?v=H1z3Gzf2TG8">
      <div className="video">
        <img src={Forearms} className="thumbnail" alt="" />
        <div className="content">
          <div className="info">
            <h3 className="title">
              The Perfect Forearm Workout
            </h3>
          </div>
        </div>
      </div>
    </a>
  </div>
    
  </ScrollMenu>
  <hr /></>
  )
};



export default HorizontalScrollbar;


// import React from 'react'
// import Chest from '../assets/images/chest.jpg';
// import Back from '../assets/images/back.jpg';
// import Shoulder from '../assets/images/shoulder.jpg';
// import Biceps from '../assets/images/biceps.jpg';
// import Triceps from '../assets/images/triceps.jpg'
// import Leg from '../assets/images/leg.jpg';
// import Traps from '../assets/images/traps.jpg';
// import Forearms from '../assets/images/forearms.jpg';

// const HorizontalScrollbar = () => {
//   return (
//     <div className="video-container">
//     <a href="https://www.youtube.com/watch?v=r0PhmnYo-us">
//       <div className="video">
//         <img src={Chest} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               Chest Workout for Pump
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=HRy3m2ck2kg">
//       <div className="video">
//         <img src={Back} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               Complete Back Workout
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=ojj_12KcS_E">
//       <div className="video">
//         <img src={Shoulder} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               Get Bigger Shoulders
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=Wwwymot4xfE">
//       <div className="video">
//         <img src={Triceps} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               Best Triceps Workout 2023
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=zvX18lFm9IM">
//       <div className="video">
//         <img src={Biceps} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               5 New Biceps Workout For Bigger Arms
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=wQY9YkWYlQg">
//       <div className="video">
//         <img src={Leg} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               How to Train Legs
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=tUIHISxQ8DM">
//       <div className="video">
//         <img src={Traps} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               4 Best Traps Exercises
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//     <a href="https://www.youtube.com/watch?v=H1z3Gzf2TG8">
//       <div className="video">
//         <img src={Forearms} className="thumbnail" alt="" />
//         <div className="content">
//           <div className="info">
//             <h3 className="title">
//               The Perfect Forearm Workout
//             </h3>
//           </div>
//         </div>
//       </div>
//     </a>
//   </div>
//   )
// }

// export default HorizontalScrollbar