import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import aboutImg from '../assets/img/about-img.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title text-center" data-aos="fade-up">
        <h2>About EduZenox</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row align-items-center">
          {/* About Content */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="about-content">
              <p>
                At <strong>EduZenox</strong>, we are dedicated to transforming aspiring individuals into skilled professionals ready to excel in the dynamic world of web development. As the educational branch of Zenox, we leverage our industry expertise to deliver top-tier training programmes focused on the MERN Stack.
              </p>
              <p>
                Our mission goes beyond just teaching; we aim to build a community of innovators who are equipped to tackle real-world challenges. With our hands-on approach, you'll gain the confidence to build, deploy, and scale web applications that stand out in the industry.
              </p>
              <ul className="about-list">
                <li><i className="bi bi-graph-up"></i> <span>Comprehensive MERN Stack curriculum.</span></li>
                <li><i className="bi bi-person-check"></i> <span>Personalized mentorship from seasoned developers.</span></li>
                <li><i className="bi bi-briefcase"></i> <span>Exclusive placement support with top tech companies.</span></li>
                <li><i className="bi bi-laptop"></i> <span>State-of-the-art learning facilities with the latest technologies.</span></li>
                <li><i className="bi bi-code-slash"></i> <span>Real-world projects to build a strong portfolio.</span></li>
                <li><i className="bi bi-globe"></i> <span>Networking opportunities with industry leaders and peers.</span></li>
              </ul>
            </div>
          </div>
          {/* End About Content */}

          {/* About Image */}
          <div className="col-lg-5 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src={aboutImg} alt="EduZenox Learning" className="img-fluid about-img styled-img"/>
          </div>
          {/* End About Image */}
        </div>

        {/* Placement Support Section */}
        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <h3>Placement Support</h3>
            <p>
              At EduZenox, your journey doesn't end with learning. We provide dedicated placement support to help you launch your career with confidence. Our strong industry connections ensure that you have access to job opportunities with leading companies, giving you a head start in the competitive tech world.
            </p>
            <a href="#courses" className="btn btn-primary mt-3"><span>Join Now</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
        {/* End Placement Support Section */}
      </div>
    </section>
  );
};

export default About;
