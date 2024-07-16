import React from 'react';
import AboutImg from '../assets/images/about-image.jpg';

const About = () => {
  return (
    <div className="aniket2-section">
        <div className="aniket2-container">
            <div className="aniket2-content-section">
                <div className="aniket2-title">
                    <h1>About Us</h1>
                </div>
                <div className="aniket2-content">
                    <h3>Hi!</h3>
                    <p>Welcome to our fitness app, where we believe that staying healthy and active should be both rewarding and fun! Our app provides you with the perfect platform to set and achieve your fitness goals, with exciting incentives to keep you motivated along the way.</p>
                    <div className="aniket2-button">
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="aniket2-social">
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
                    <a href="/"><i className="fab fa-twitter"></i></a>
                    <a href="/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div >
                <img className="aniket2-image-section" src={AboutImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About;