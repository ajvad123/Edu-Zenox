import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/css/main.css';


const Header = () => {

  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      setMessage(value);
    }
  };

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${7510527810}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };




  return (



    <header id="header" className="header d-flex align-items-center sticky-top  ">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <h2 className=""><i className="fa-solid fa-graduation-cap fa-fade" style={{ color: ' #FFD43B' }}></i>EduZenox</h2>
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
        <button
          onClick={toggleModal}
          style={{
            marginLeft: '15px',
            padding: '10px 20px',
            backgroundColor: '#007bff', // Blue color
            color: '#fff',
            border: 'none',
            borderRadius: '8px', // Curved edges
            cursor: 'pointer'
          }}
        >
          quick
        </button>

      </div>


      <div>
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darkened background for emphasis
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000, // Ensure the modal is above other elements
            }}
          >
            <div
              style={{
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '12px', // Softer curved edges
                maxWidth: '400px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
                position: 'relative',
              }}
            >
              <h2
                style={{
                  marginBottom: '20px',
                  color: '#007bff', // Blue color to match the button style
                  fontSize: '24px', // Slightly larger font size for emphasis
                  fontWeight: 'bold', // Make the text bold
                  letterSpacing: '1px', // Add some letter spacing for a modern look
                  textTransform: 'uppercase', // Make the text uppercase for impact
                  borderBottom: '2px solid #007bff', // Add an underline effect
                  paddingBottom: '10px', // Add some padding below the text
                }}
              >
                Get in Touch with Us              </h2>

              <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
                  Enter your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                onClick={openWhatsApp}
                style={{
                  padding: '10px 25px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginBottom: '10px',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#1DA851')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#25D366')}
              >
                Chat on WhatsApp
              </button>

              <button
                onClick={toggleModal}
                style={{
                  padding: '10px 25px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#555',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#e0e0e0')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}
export default Header;
