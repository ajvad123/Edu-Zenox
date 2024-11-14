import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import aboutImg from '../assets/img/about-img.jpg';

const About = () => {
  return (
    <section id="about" className="about section ">
      {/* Section Title */}
      {/* About EduZenox Section */}
      <div className="container section-title text-center zoom-in-load" data-aos="fade-up">
        <h2>About EDUNOX</h2>
      </div>
      {/* End Section Title */}

      <div className="container zoom-in-load">
        <div className="row align-items-center">
          {/* About Content */}
          <div
            className="col-lg-7"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="about-content">
              <p>
                At <strong>EDUNOX</strong>, we are dedicated to transforming aspiring individuals into skilled professionals ready to excel in the dynamic world of web development. As the educational branch of Zenox, we leverage our industry expertise to deliver top-tier training programmes focused on the MERN Stack.
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
          <div
            className="col-lg-5 text-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={aboutImg}
              alt="EduZenox Learning"
              className="img-fluid about-img styled-img"
              style={{
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          {/* End About Image */}
        </div>
      </div>
      {/* End About EduZenox Section */}

      {/* Placement Support Section */}
      <div className="row mt-5 zoom-in-load">
        <div
          className="col-lg-12 text-center p-5"
          style={{
            backgroundColor: "#fff8e1", // Light warm yellow color
            color: "#444", // Medium gray text color
            borderRadius: "10px",
            border: "1px solid #ddd", // Soft border for a refined look
          }}
          data-aos="fade-up"
        >
          <h3>Placement Support</h3>
          <p>
            At EDUNOX, your journey doesn't end with learning. We provide dedicated placement support to help you launch your career with confidence. Our strong industry connections ensure that you have access to job opportunities with leading companies, giving you a head start in the competitive tech world.
          </p>
          <a href="#courses" className="btn btn-primary mt-3">
            <span>Join Now</span><i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* End Placement Support Section */}







    </section>
  );
};

export default About;
