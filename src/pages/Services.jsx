import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import NeuralBackground from '../components/NeuralBackground';
import './Services.css';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Scroll animations with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: '🤖',
      title: 'AI/ML Solutions',
      description: 'Intelligent AI and machine learning solutions to automate processes, gain insights, and drive innovation. Transform your business with cutting-edge AI technology.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Integration'],
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      delay: 0
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for real-time client needs. Scalable, secure, and performance-optimized solutions.',
      features: ['React & Next.js', 'Real-time Updates', 'Responsive Design', 'Performance Optimization', 'API Integration'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      delay: 0.1
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android. Delivering seamless user experiences across all devices.',
      features: ['React Native', 'Native Development', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
      delay: 0.2
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions. Ensure your applications are always available and performant.',
      features: ['AWS & Azure', 'DevOps', 'Auto-scaling', 'CI/CD Pipelines', 'Monitoring'],
      gradient: 'linear-gradient(135deg, #0da0d9 0%, #10b981 100%)',
      delay: 0.3
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience. Design systems that scale with your business.',
      features: ['User Research', 'Prototyping', 'Design Systems', 'Accessibility', 'Brand Identity'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
      delay: 0.4
    },
    {
      icon: '🔒',
      title: 'Security Solutions',
      description: 'Enterprise-grade security solutions to protect your data and applications. Compliance and best practices built-in.',
      features: ['Security Audits', 'Encryption', 'Compliance', 'Penetration Testing', 'Security Monitoring'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)',
      delay: 0.5
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your business needs, goals, and client requirements through detailed consultation.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We create a detailed roadmap and technical architecture tailored to your specific requirements.',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build with precision, using agile methodologies and best practices for quality delivery.',
      icon: '⚙️'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support, maintenance, and updates.',
      icon: '🚀'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <NeuralBackground />
        </div>
        <div className="hero-container container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Our Services</span>
            <h1 className="hero-title">
              AI/ML & Software Solutions for <span className="gradient-text">Real-Time Clients</span>
            </h1>
            <p className="hero-subtitle">
              Comprehensive AI/ML and software products tailored to your business needs.
              We deliver intelligent solutions that drive results and innovation.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">
                <span>Get Started</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section-padding">
        <div className="container">
          <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">What We Offer</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From AI/ML solutions to web and mobile apps, we provide end-to-end intelligent software solutions.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card ${isVisible ? 'fade-in-up' : ''} ${hoveredCard === index ? 'hovered' : ''}`}
                style={{
                  animationDelay: `${service.delay}s`,
                  '--service-gradient': service.gradient
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-card-background" style={{ background: service.gradient }}></div>
                <div className="service-content">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="service-btn">
                    Learn More
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding" ref={processRef}>
        <div className="container">
          <div className={`section-header scroll-animate ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Our Process</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              A proven methodology to deliver software solutions that meet your business objectives.
            </p>
          </div>
          <div className="process-timeline">
            {process.map((step, index) => (
              <div
                key={index}
                className={`process-step scroll-animate ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="step-number-wrapper">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section-padding">
        <div className="container">
          <div className={`cta-content ${isVisible ? 'fade-in' : ''}`}>
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-subtitle">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary large">Get in Touch</Link>
              <Link to="/portfolio" className="btn-secondary large">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
