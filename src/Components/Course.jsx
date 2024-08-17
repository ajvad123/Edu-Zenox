import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import { userDetails } from '../Services/allApies';
import { toast } from 'react-toastify';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studentInfo, setStudentInfo] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    qualification: '', 
    course: '', 
    place: '', 
    whatsapp: '' 
  });

  const handleEnrollClick = (courseName) => {
    setSelectedCourse(courseName);
    setStudentInfo({ ...studentInfo, course: courseName });
  };

  const handleChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  const handleUserDetails = async (e) => {
    e.preventDefault();

    const {name,email,phone,qualification,course,place,whatsapp }=studentInfo

     console.log(name,email,phone,qualification,course,place,whatsapp);
     

      const result= await userDetails(studentInfo)

      if (result.status==200) {

        toast.success("Enrollment submitted successfully!")
        toast.warning("Our Team Will be Contact you  Soon!")
        setStudentInfo({ 
          name: '', 
          email: '', 
          phone: '', 
          qualification: '', 
          course: '', 
          place: '', 
          whatsapp: '' 
        });
        
      }else{
        toast.error(result.response.data)
      }


   
  };

  return (
    <section id="courses" className="courses section">
      <div className="container  zoom-in-load">
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Our Courses</h2>
          <p className="section-subtitle">Explore our comprehensive training programs designed to elevate your skills and career.</p>
        </div>

        <div className="row">
          {/* First Course */}
          <div className="col-lg-6 mb-4">
            <div className="course-card card shadow-lg border-0 h-100" data-aos="fade-up">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">MERN Stack Web Development</h4>
                <p className="card-text">
                  A comprehensive course designed to take you from beginner to full-stack developer using the MERN stack. Includes hands-on projects, mentorship, and placement support.
                  <br />  <span className='text-primary'>[HTML, CSS, Bootstrap, Javascript(advanced), Git, React.js, Node.js, Express.js & MongoDB]</span>
                </p>
                <ul className="course-info-list flex-grow-1">
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-clock" style={{ color: 'blue', fontSize: '1.25rem', marginRight: '5px' }}></i>
                    <h6 style={{ color: 'blue', margin: 0 }}>Duration: <span className='text-dark'>6 Months, 5 Days a Week, 1.5-2 Hours/day</span></h6>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-currency-dollar" style={{ color: 'blue', fontSize: '1.25rem', marginRight: '5px' }}></i>
                    <h6 style={{ color: 'blue', margin: 0 }}>Course Fee:</h6>
                  </li>
                  <li>
                    <h6 style={{ color: 'blue' }}>Fees (EMI Mode): <span className='text-dark'>35,000</span></h6>
                  </li>
                  <li>
                    <h6 style={{ color: 'blue' }}>Fees (One time Payment mode): <span className='text-dark'>30,000</span></h6>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-calendar-check" style={{ color: 'blue', fontSize: '1.25rem', marginRight: '5px' }}></i>
                    <h6 style={{ color: 'blue', margin: 0 }}>New Batch: <span className='text-dark'>Comming Soon..</span></h6>
                  </li>
                </ul>
                <button 
                  className="btn btn-primary mt-3 align-self-start"
                  data-bs-toggle="modal" 
                  data-bs-target="#enrollModal" 
                  onClick={() => handleEnrollClick('MERN Stack Web Development')}
                >
                  <span>Enroll Now</span><i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Second Course */}
          <div className="col-lg-6 mb-4">
            <div className="course-card card shadow-lg border-0 h-100" data-aos="fade-up">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">React Web Designing</h4>
                <p className="card-text">
                  Learn the fundamentals of React and dive into advanced concepts to build high-performance web applications. Ideal for developers looking to enhance their frontend skills.
                  <br /><span className='text-primary'>[HTML, CSS, Bootstrap, Javascript(basics), Git, React.js]</span>
                </p>
                <ul className="course-info-list flex-grow-1">
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-clock" style={{ color: 'blue', fontSize: '1.25rem', marginRight: '5px' }}></i>
                    <h6 style={{ color: 'blue', margin: 0 }}>Duration: <span className='text-dark'>3 Months, 5 Days a Week, 1.5-2 Hours/day</span></h6>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-currency-dollar" style={{ color: 'blue', fontSize: '1.25rem', marginRight: '5px' }}></i>
                    <h6 style={{ color: 'blue', margin: 0 }}>Course Fee:</h6>
                  </li>
                  <li>
                    <h6 style={{ color: 'blue' }}>Fees (EMI Mode): <span className='text-dark'>20,000</span></h6>
                  </li>
                  <li>
                    <h6 style={{ color: 'blue' }}>Fees (One time Payment mode): <span className='text-dark'>15,000</span></h6>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi bi-calendar-check" style={{ color: 'blue', fontSize: '1.25rem', marginRight: '5px' }}></i>
                    <h6 style={{ color: 'blue', margin: 0 }}>New Batch: <span className='text-dark'>Comming Soon..</span></h6>
                  </li>
                </ul>
                <button 
                  className="btn btn-primary mt-3 align-self-start"
                  data-bs-toggle="modal" 
                  data-bs-target="#enrollModal" 
                  onClick={() => handleEnrollClick('React Web Designing')}
                >
                  <span>Enroll Now</span><i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="enrollModal" tabIndex="-1" aria-labelledby="enrollModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="enrollModalLabel">Enroll Now..!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUserDetails}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={studentInfo.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={studentInfo.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="phone" 
                    name="phone"
                    value={studentInfo.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="qualification" className="form-label">Qualification</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="qualification" 
                    name="qualification"
                    value={studentInfo.qualification}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="place" className="form-label">Place</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="place" 
                    name="place"
                    value={studentInfo.place}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="whatsapp" className="form-label">WhatsApp Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="whatsapp" 
                    name="whatsapp"
                    value={studentInfo.whatsapp}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="course" className="form-label">Course</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="course" 
                    name="course"
                    value={studentInfo.course}
                    readOnly
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
