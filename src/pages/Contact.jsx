import { useEffect, useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import './Contact.css';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@prag.com',
      subtext: 'We\'ll respond within 24 hours',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      subtext: 'Mon-Fri, 9AM-6PM EST',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      icon: '📍',
      title: 'Office',
      value: '123 Innovation Street',
      value2: 'San Francisco, CA 94105',
      subtext: 'Visit us anytime',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)'
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM',
      value2: 'Saturday: 10:00 AM - 4:00 PM',
      subtext: '24/7 support available',
      gradient: 'linear-gradient(135deg, #0da0d9 0%, #10b981 100%)'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <NeuralBackground />
        </div>
        <div className="hero-container container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Contact Us</span>
            <h1 className="hero-title">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="hero-subtitle">
              Ready to transform your business with innovative software solutions? 
              Get in touch and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className={`contact-info ${isVisible ? 'slide-in-left' : ''}`}>
              <h2 className="info-title">Get in Touch</h2>
              <p className="info-description">
                We're here to help you bring your software vision to life. 
                Reach out through any of these channels.
              </p>
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className={`info-card ${isVisible ? 'fade-in-up' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="info-icon-wrapper" style={{ background: info.gradient }}>
                      <div className="info-icon">{info.icon}</div>
                    </div>
                    <div className="info-content">
                      <h3 className="info-card-title">{info.title}</h3>
                      <p className="info-value">{info.value}</p>
                      {info.value2 && <p className="info-value">{info.value2}</p>}
                      <span className="info-subtext">{info.subtext}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`contact-form-wrapper ${isVisible ? 'slide-in-right' : ''}`}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="John Doe"
                    className={focusedField === 'name' ? 'focused' : ''}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="john@example.com"
                    className={focusedField === 'email' ? 'focused' : ''}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="What's this about?"
                    className={focusedField === 'subject' ? 'focused' : ''}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    placeholder="Tell us about your project or inquiry..."
                    className={focusedField === 'message' ? 'focused' : ''}
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
