import { useEffect, useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import './About.css';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about">
      <section className="about-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <NeuralBackground />
        </div>
        <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
          <span className="section-badge">About Us</span>
          <h1 className="page-title">Building the Future of <span className="gradient-text">AI/ML & Software Solutions</span></h1>
          <p className="page-subtitle">
            We're a forward-thinking software company dedicated to delivering innovative AI/ML and software products for real-time clients worldwide.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className={`story-text ${isVisible ? 'slide-in-left' : ''}`}>
              <span className="section-badge">Our Story</span>
              <h2>Transforming Ideas Into Reality</h2>
              <p>
                Founded with a vision to empower businesses through innovation, Prag has been 
                at the forefront of AI/ML and software development. We specialize in creating 
                intelligent, real-time solutions that not only solve problems but also drive business growth.
              </p>
              <p>
                Our team of passionate professionals brings together years of experience in 
                artificial intelligence, machine learning, and software engineering to deliver 
                exceptional AI/ML and software products for clients across various industries.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <div className="stat-value">5+</div>
                  <div className="stat-desc">Years Experience</div>
                </div>
                <div className="story-stat">
                  <div className="stat-value">50+</div>
                  <div className="stat-desc">Projects Delivered</div>
                </div>
                <div className="story-stat">
                  <div className="stat-value">30+</div>
                  <div className="stat-desc">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className={`story-image ${isVisible ? 'slide-in-right' : ''}`}>
              <div className="about-visual">
                <div className="visual-card card-1">
                  <div className="card-content">
                    <div className="card-icon">💻</div>
                    <div className="card-title">Web Solutions</div>
                  </div>
                </div>
                <div className="visual-card card-2">
                  <div className="card-content">
                    <div className="card-icon">📱</div>
                    <div className="card-title">Mobile Apps</div>
                  </div>
                </div>
                <div className="visual-card card-3">
                  <div className="card-content">
                    <div className="card-icon">☁️</div>
                    <div className="card-title">Cloud Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              Our core values guide everything we do and shape how we deliver software solutions.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrapper">
                <div className="value-icon">🎯</div>
              </div>
              <h3>Mission-Driven</h3>
              <p>Every software solution we build is aligned with our mission to create value and drive innovation for our clients.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <div className="value-icon">🌱</div>
              </div>
              <h3>Growth-Oriented</h3>
              <p>We continuously evolve and adapt to meet changing market needs and emerging technologies.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <div className="value-icon">💎</div>
              </div>
              <h3>Quality First</h3>
              <p>Excellence is not optional - it's our standard for every software product and service we deliver.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <div className="value-icon">🤲</div>
              </div>
              <h3>Collaborative</h3>
              <p>We believe in the power of teamwork and open communication with our clients throughout the development process.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Team</span>
            <h2 className="section-title">Meet the Experts</h2>
            <p className="section-subtitle">
              Talented professionals dedicated to delivering exceptional software solutions.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>Leadership Team</h3>
              <p>Experienced professionals guiding our vision and strategy</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Developers</h3>
              <p>Talented engineers building scalable and efficient solutions</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🎨</div>
              <h3>Designers</h3>
              <p>Creative minds crafting beautiful and intuitive user experiences</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Support Team</h3>
              <p>Dedicated professionals ensuring client success and satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
