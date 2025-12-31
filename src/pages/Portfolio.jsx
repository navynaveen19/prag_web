import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NeuralBackground from '../components/NeuralBackground';
import './Portfolio.css';

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured e-commerce solution with real-time inventory management and payment integration for retail clients.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      year: '2024',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'enterprise',
      description: 'Comprehensive healthcare platform for patient management, appointments, and medical records with real-time updates.',
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS'],
      image: '🏥',
      year: '2024',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction processing.',
      technologies: ['React Native', 'Node.js', 'Firebase', 'Blockchain'],
      image: '💳',
      year: '2023',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)'
    },
    {
      id: 4,
      title: 'SaaS Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard with customizable widgets and advanced data visualization for business intelligence.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'Redis'],
      image: '📊',
      year: '2024',
      gradient: 'linear-gradient(135deg, #0da0d9 0%, #10b981 100%)'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'On-demand food delivery platform with real-time tracking and multi-restaurant support for seamless ordering.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
      image: '🍔',
      year: '2023',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)'
    },
    {
      id: 6,
      title: 'Enterprise CRM System',
      category: 'enterprise',
      description: 'Custom CRM solution with AI-powered lead scoring and automated workflow management for sales teams.',
      technologies: ['Angular', 'Java', 'MySQL', 'TensorFlow'],
      image: '📈',
      year: '2024',
      gradient: 'linear-gradient(135deg, #10b981 0%, #6366f1 100%)'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = [
    { number: '50+', label: 'Projects', icon: '🚀' },
    { number: '30+', label: 'Clients', icon: '😊' },
    { number: '98%', label: 'Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Support', icon: '💬' }
  ];

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <NeuralBackground />
        </div>
        <div className="hero-container container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Our Portfolio</span>
            <h1 className="hero-title">
              Software Solutions We've <span className="gradient-text">Delivered</span>
            </h1>
            <p className="hero-subtitle">
              Showcasing innovative software products and services we've built for real-time clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section section-padding">
        <div className="container">
          <div className={`filter-buttons ${isVisible ? 'fade-in' : ''}`}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${isVisible ? 'fade-in-up' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image-wrapper">
                  <div className="project-image" style={{ background: project.gradient + '20' }}>
                    <div className="project-icon" style={{ background: project.gradient }}>
                      {project.image}
                    </div>
                  </div>
                  <div className="project-overlay" style={{ background: project.gradient }}>
                    <Link to="/contact" className="view-project-btn">
                      View Project
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category" style={{ background: project.gradient + '20', color: 'var(--text-primary)' }}>
                      {project.category}
                    </span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="tech-tag"
                        style={{ borderColor: 'var(--border-color)', background: 'var(--bg-card)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats section-padding">
        <div className="container">
          <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Our Impact</span>
            <h2 className="section-title">Numbers That Matter</h2>
            <p className="section-subtitle">
              The results speak for themselves. Here's what we've achieved together with our clients.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
