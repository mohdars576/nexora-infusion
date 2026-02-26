// client/src/pages/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setStatus({ type: 'error', message: 'Error sending message. Please try again.' });
    }
  };

  return (
    <section className="contact" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h2>Contact Us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
          <div>
            <h3>Get in Touch</h3>
            <p style={{ marginBottom: '2rem' }}>
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help your business grow.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaEnvelope style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }} />
                <div>
                  <h4>Email</h4>
                  <p>info@nexorainfusion.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaPhone style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }} />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ color: 'var(--primary-color)', marginRight: '1rem', fontSize: '1.2rem' }} />
                <div>
                  <h4>Address</h4>
                  <p>123 Tech Street, Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div style={{ 
                padding: '1rem', 
                marginBottom: '1rem', 
                backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                color: status.type === 'success' ? '#155724' : '#721c24',
                borderRadius: '5px'
              }}>
                {status.message}
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange}>
                <option value="">Select Service</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="software">Custom Software</option>
                <option value="mobile">Mobile Development</option>
                <option value="data">Data Analytics</option>
                <option value="ai">AI & Machine Learning</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
