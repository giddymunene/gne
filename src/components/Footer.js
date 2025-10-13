import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GNE IT Consultancy</h3>
            <p>
              Your trusted partner for comprehensive IT solutions. 
              We provide expert services to help your business thrive in the digital world.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Virtual Assistance</a></li>
              <li><a href="#services">Data Entry</a></li>
              <li><a href="#services">Software Engineering</a></li>
              <li><a href="#services">Hardware Repairs</a></li>
              <li><a href="#services">Graphic Design</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 GNE IT Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;