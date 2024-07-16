import React from "react";
import "../../src/App.css";
import leftArrow from "../assets/icon/left-arrow.svg";
import rightArrow from "../assets/icon/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}
