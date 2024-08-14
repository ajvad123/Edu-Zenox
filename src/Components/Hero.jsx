import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import heroImg from '../assets/img/hero-img.png';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
          <h1> Transforming passion into profession at EduZenox</h1>
          <p>Your Gateway to Mastering the MERN Stack and Beyond</p>
          <div className="d-flex">
              <a href="#courses" className="btn-get-started">View Courses</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src={heroImg} className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
