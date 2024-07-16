import React, { useState } from "react";
import "../../src/App.css";
import BtnSlider from "../components/BtnSlider";
import dataSlider from "../components/dataSlider";
import logo1 from '../assets/images/Logo1.png';
import logo2 from '../assets/images/Logo2.png';
import logo3 from '../assets/images/Logo3.png';
import logo4 from '../assets/images/Logo4.png';
import logo5 from '../assets/images/Logo5.png';

const import_img=[
  logo1,
  logo2,
  logo3,
  logo4,
  logo5
]


export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <><div className="slider-text"> Your Watch is connected! <br /> <span className='slider-small-text'>Complete goals to win exciting Coupons</span></div>
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={import_img[index+1]}
              alt="React App"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5}).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div></>
  );
}
