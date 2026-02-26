// client/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaShieldAlt, FaCode, FaMobile, FaDatabase, FaRobot } from 'react-icons/fa';
import { Element } from 'react-scroll';

const Home = () => {
  const services = [
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business needs.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: <FaCode />,
      title: 'Custom Software',
      description: 'Tailored software solutions built to your specific requirements.'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.'
    },
    {
      icon: <FaDatabase />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights.'
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions to automate and optimize processes.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Business with Nexora Infusion</h1>
          <p>Leading IT solutions provider delivering innovative technology services to help businesses thrive in the digital age.</p>
          <Link to="/contact" className="btn">Get Started</Link>
          <Link to="/services" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Our Services</Link>
        </div>
      </section>

      {/* Services Section */}
      <Element name="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>Why Choose Nexora Infusion?</h2>
          <div className="about-content">
            <div>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                With over a decade of experience in the IT industry, we've helped hundreds of businesses 
                achieve their digital transformation goals. Our team of expert developers, architects, 
                and consultants work tirelessly to deliver solutions that drive real business value.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div>Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div>Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div>Expert Team</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div>Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Team working"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;