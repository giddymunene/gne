import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_d1lrenf',  
      'template_5bcynlk',  
      formData,
      'KPUU17xXP64ocJGnB'    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Oops! Something went wrong. Please try again.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for all your IT needs</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <ul className="contact-details">
              <li><i className="fas fa-map-marker-alt"></i><span>Embu, Kenya</span></li>
              <li><i className="fas fa-phone"></i><span>+254714751341</span></li>
              <li><i className="fas fa-envelope"></i><span>munenegiddy08@gmail.com</span></li>
              <li><i className="fas fa-clock"></i><span>Mon - Fri: 9:00 AM - 6:00 PM</span></li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name"
                value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email"
                value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject"
                value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5"
                value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
