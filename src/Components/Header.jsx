import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css'; // Custom styles for further customization
import heroImg from '../assets/img/edunox.png';

const Header = () => {
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const openWhatsApp = () => {
    const whatsappURL = `https://wa.me/${7510527810}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header sticky-top">
      <Container className="d-flex align-items-center">
        <Navbar expand="lg" className="w-100">
          <Navbar.Brand href="/" className=" ">
            <img src={heroImg} id='logoIMG' className="" alt="Hero" />

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="d-lg-flex">
            <Nav className="ms-auto">
              <Nav.Link href="#hero" className="nav-link text-white">Home</Nav.Link>
              <Nav.Link href="#about" className="nav-link text-white">About</Nav.Link>
              <Nav.Link href="#courses" className="nav-link text-white">Courses</Nav.Link>
              <Nav.Link href="#contact" className="nav-link text-white">Contact</Nav.Link>
            </Nav>
            <Button
              onClick={toggleModal}
              className="btn-quick d-none d-lg-block ms-3"
            >
              Quick
            </Button>
            <Button
              onClick={toggleModal}
              className="btn-quick d-lg-none ms-3"
            >
              Quick
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Modal show={isModalOpen} onHide={toggleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Get in Touch with Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: '15px' }}>
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={openWhatsApp}
            style={{ padding: '10px 25px' }}
          >
            Chat on WhatsApp
          </Button>
          <Button
            variant="secondary"
            onClick={toggleModal}
            style={{ padding: '10px 25px' }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
