import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-headset',
      title: 'Virtual Assistance',
      description: 'Professional virtual assistance services to help manage your business tasks efficiently and effectively.'
    },
    {
      icon: 'fas fa-database',
      title: 'Data Entry',
      description: 'Accurate and efficient data entry services to organize and manage your valuable information.'
    },
    {
      icon: 'fas fa-code',
      title: 'Software Engineering',
      description: 'Custom software development, web applications, and mobile apps tailored to your business needs.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Hardware Repairs',
      description: 'Expert computer hardware repairs, maintenance, and upgrades for all types of devices.'
    },
    {
      icon: 'fas fa-palette',
      title: 'Graphic Design',
      description: 'Creative graphic design services including logos, branding, and marketing materials.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'IT Consulting',
      description: 'Comprehensive IT consulting services to optimize your technology infrastructure and strategy.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive IT solutions tailored to meet your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;