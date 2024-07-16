import React from 'react';
import salad from '../assets/images/salad.jpeg';

const About = () => {
  return (
    <>
    <div div class="aniket3-section">
    <div class="aniket3-container">
        <div class="aniket3-image-section">
        <img src={salad} alt=""  />
        </div>
        <div class="aniket3-content-section">
            <div class="aniket3-title">
                <h1>Join the Community</h1>
            </div>
            <div class="aniket3-content">
                <h3>Recipes and Diet Plans</h3>
                <p>Check out people's go to meals and also join the community by uploading yours</p>
                <div class="aniket3-button">
                    <a href="https://github.com/anikethazra99/coupon/tree/main/Coupons">+</a>
                    <a href="https://github.com/anikethazra99/coupon/tree/main/Coupons">Check Out Recipes</a>
                </div>
            </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default About;