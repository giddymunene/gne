import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About GNE IT Consultancy</h2>
            <p>
              With years of experience in the IT industry, GNE IT Consultancy has established 
              itself as a trusted partner for businesses seeking comprehensive technology solutions. 
              Our team of experts is dedicated to delivering exceptional service and innovative 
              solutions that drive your business forward.
            </p>
            <p>
              We understand that every business has unique needs, which is why we offer a 
              complete range of IT services under one roof. From virtual assistance to complex 
              software engineering projects, we have the expertise to handle it all.
            </p>
            <ul className="features">
              <li><i className="fas fa-check"></i> Experienced IT Professionals</li>
              <li><i className="fas fa-check"></i> 24/7 Customer Support</li>
              <li><i className="fas fa-check"></i> Customized Solutions</li>
              <li><i className="fas fa-check"></i> Competitive Pricing</li>
              <li><i className="fas fa-check"></i> Quick Response Times</li>
            </ul>
          </div>
          <div className="about-image">
            {/* You can add an image here */}
            <div style={{
              background: '#3498db',
              height: '400px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem'
            }}>
              IT Solutions Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;