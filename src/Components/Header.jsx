import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';

const Header = () => (
  <header id="header" className="header d-flex align-items-center sticky-top  ">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">
      <a href="/" className="logo d-flex align-items-center me-auto">
        <h2 className=""><i className="fa-solid fa-graduation-cap fa-fade" style={{color:' #FFD43B'}}></i>EduZenox</h2>
      </a>
      <nav id="navmenu" className="navmenu">
      <ul>
          <li><a href="#hero" class="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>
      <a className="btn-getstarted" href="#about">Get Started</a>
    </div>
  </header>
);

export default Header;
