import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <a href="/" className="d-flex align-items-center">
            <h2 className=""><i className="fa-solid fa-graduation-cap fa-fade" style={{ color: ' #FFD43B' }}></i>EduZenox</h2>
          </a>
          <div className="footer-contact pt-3">
            <p>Nelliparamb,</p>
            <p>Manjeri</p>

            <p className="mt-3"><strong>Phone:</strong> <span>+91 8893513353</span></p>
            <p><strong>Email:</strong> <span>eduzenox@gmail.com</span></p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#about">About Us</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#courses">Courses</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contact us</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Billing Software</a></li>
            <li><i className="bi bi-chevron-right"></i> <a href="#">Full Stack Training</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12">
          <h4>Stay Updated</h4>
          <p>Get in touch with us  to receive updates on our latest products, services, and training programs.</p>
          <form action="forms/newsletter.php" method="post" className="php-email-form">
            <div className="newsletter-form">
              <li><a href="#contact">Get in touch </a></li>

            </div>
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your subscription request has been sent. Thank you!</div>
          </form>
          <div className="social-links d-flex mt-3">
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/zenox_softwares_manjeri?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong className="px-1 sitename">EduZenox</strong> <span>All Rights Reserved</span></p>

    </div>
  </footer>
);

export default Footer;
