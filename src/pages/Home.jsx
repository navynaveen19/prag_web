import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);

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

    // Parallax effect for hero
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (heroRef.current) {
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  const features = [
    {
      icon: '⚡',
      title: 'Real-Time Solutions',
      description: 'Build scalable applications that handle real-time data processing and instant updates for your clients.'
    },
    {
      icon: '🤖',
      title: 'AI/ML Powered',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain intelligent insights.'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards to protect your data and your clients\' information.'
    },
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Agile development process ensures rapid deployment without compromising on quality.'
    },
    {
      icon: '🎯',
      title: 'Client-Focused',
      description: 'Every solution is tailored to your specific business needs and client requirements.'
    },
    {
      icon: '💎',
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance processes ensure bug-free, production-ready software.'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '👩‍💼',
      text: 'Prag delivered an exceptional e-commerce platform that increased our sales by 300%. Their team is professional, responsive, and truly understands business needs.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, HealthCare Solutions',
      image: '👨‍💻',
      text: 'Working with Prag was a game-changer. They built our healthcare management system with precision and attention to detail. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, FoodieExpress',
      image: '👩‍🍳',
      text: 'The mobile app Prag created for us exceeded all expectations. Our user base grew 5x in the first quarter. Outstanding work!',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          {/* Neuron and Brain Animations */}
          <div className="neural-animations">
            {/* Brain Structure */}
            <svg className="brain-structure" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              {/* Left Hemisphere */}
              <g className="brain-hemisphere left-hemisphere">
                <path className="brain-outline" d="M200,400 Q150,300 180,200 Q200,120 250,150 Q280,170 300,200 Q320,250 310,300 Q305,350 280,380 Q260,400 240,410 Q220,420 200,400 Z" 
                  fill="rgba(99, 102, 241, 0.15)" 
                  stroke="rgba(99, 102, 241, 0.3)" 
                  strokeWidth="2">
                  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
                </path>
                {/* Brain Folds */}
                <path className="brain-fold" d="M220,250 Q240,220 260,240" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" fill="none">
                  <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" />
                </path>
                <path className="brain-fold" d="M230,320 Q250,300 270,320" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" fill="none">
                  <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                </path>
                <path className="brain-fold" d="M210,360 Q230,340 250,360" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" fill="none">
                  <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.2s" repeatCount="indefinite" begin="1s" />
                </path>
              </g>
              
              {/* Right Hemisphere */}
              <g className="brain-hemisphere right-hemisphere">
                <path className="brain-outline" d="M1000,400 Q1050,300 1020,200 Q1000,120 950,150 Q920,170 900,200 Q880,250 890,300 Q895,350 920,380 Q940,400 960,410 Q980,420 1000,400 Z" 
                  fill="rgba(139, 92, 246, 0.15)" 
                  stroke="rgba(139, 92, 246, 0.3)" 
                  strokeWidth="2">
                  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
                </path>
                {/* Brain Folds */}
                <path className="brain-fold" d="M980,250 Q960,220 940,240" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" fill="none">
                  <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.2s" repeatCount="indefinite" begin="0.3s" />
                </path>
                <path className="brain-fold" d="M970,320 Q950,300 930,320" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" fill="none">
                  <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.7s" repeatCount="indefinite" begin="0.8s" />
                </path>
                <path className="brain-fold" d="M990,360 Q970,340 950,360" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" fill="none">
                  <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.4s" repeatCount="indefinite" begin="1.3s" />
                </path>
              </g>
              
              {/* Corpus Callosum (Connection between hemispheres) */}
              <path className="corpus-callosum" d="M580,350 Q600,320 620,350" 
                stroke="rgba(236, 72, 153, 0.3)" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round">
                <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
              </path>
            </svg>
            
            {/* Neural Network */}
            <svg className="neural-network" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              {/* Neuron 1 */}
              <g className="neuron-group" transform="translate(150, 150)">
                <path className="dendrite" d="M0,0 Q-30,-25 -50,-15 T-80,5" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
                </path>
                <path className="dendrite" d="M0,0 Q-25,-35 -15,-55 T5,-85" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" begin="0.3s" />
                </path>
                <path className="dendrite" d="M0,0 Q30,25 50,15 T80,-5" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.6s" repeatCount="indefinite" begin="0.6s" />
                </path>
                <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#6366f1" opacity="0.9">
                  <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </circle>
                <line className="axon" x1="0" y1="0" x2="120" y2="40" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2.5" strokeLinecap="round">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
                </line>
                <circle className="synapse" cx="120" cy="40" r="6" fill="#6366f1" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Neuron 2 */}
              <g className="neuron-group" transform="translate(450, 120)">
                <path className="dendrite" d="M0,0 Q-35,-20 -55,-10 T-85,10" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.7s" repeatCount="indefinite" />
                </path>
                <path className="dendrite" d="M0,0 Q-20,35 -10,55 T10,85" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.9s" repeatCount="indefinite" begin="0.4s" />
                </path>
                <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.9">
                  <animate attributeName="r" values="12;18;12" dur="3.2s" repeatCount="indefinite" begin="0.2s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.3s" repeatCount="indefinite" />
                </circle>
                <line className="axon" x1="0" y1="0" x2="140" y2="60" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2.5" strokeLinecap="round">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
                </line>
                <circle className="synapse" cx="140" cy="60" r="6" fill="#8b5cf6" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.7s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Neuron 3 */}
              <g className="neuron-group" transform="translate(750, 200)">
                <path className="dendrite" d="M0,0 Q-30,-30 -50,-20 T-80,0" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.6s" repeatCount="indefinite" />
                </path>
                <path className="dendrite" d="M0,0 Q30,30 50,20 T80,0" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
                </path>
                <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#ec4899" opacity="0.9">
                  <animate attributeName="r" values="12;18;12" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite" />
                </circle>
                <line className="axon" x1="0" y1="0" x2="100" y2="80" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2.5" strokeLinecap="round">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
                </line>
                <circle className="synapse" cx="100" cy="80" r="6" fill="#ec4899" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Neuron 4 */}
              <g className="neuron-group" transform="translate(300, 400)">
                <path className="dendrite" d="M0,0 Q-25,-30 -45,-20 T-75,0" stroke="rgba(13, 160, 217, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.9s" repeatCount="indefinite" />
                </path>
                <path className="dendrite" d="M0,0 Q25,30 45,20 T75,0" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="3.1s" repeatCount="indefinite" begin="0.3s" />
                </path>
                <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#0da0d9" opacity="0.9">
                  <animate attributeName="r" values="12;18;12" dur="3.1s" repeatCount="indefinite" begin="0.3s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <line className="axon" x1="0" y1="0" x2="130" y2="50" stroke="rgba(13, 160, 217, 0.5)" strokeWidth="2.5" strokeLinecap="round">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.3s" repeatCount="indefinite" begin="0.6s" />
                </line>
                <circle className="synapse" cx="130" cy="50" r="6" fill="#0da0d9" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Neuron 5 */}
              <g className="neuron-group" transform="translate(600, 500)">
                <path className="dendrite" d="M0,0 Q-30,-25 -50,-15 T-80,5" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
                </path>
                <path className="dendrite" d="M0,0 Q30,25 50,15 T80,-5" stroke="rgba(13, 160, 217, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.7s" repeatCount="indefinite" begin="0.4s" />
                </path>
                <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#10b981" opacity="0.9">
                  <animate attributeName="r" values="12;18;12" dur="2.9s" repeatCount="indefinite" begin="0.4s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <line className="axon" x1="0" y1="0" x2="110" y2="70" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2.5" strokeLinecap="round">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
                </line>
                <circle className="synapse" cx="110" cy="70" r="6" fill="#10b981" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.9s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Neuron 6 - Additional */}
              <g className="neuron-group" transform="translate(900, 350)">
                <path className="dendrite" d="M0,0 Q-20,-25 -40,-15 T-70,5" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.4s" repeatCount="indefinite" />
                </path>
                <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#ec4899" opacity="0.9">
                  <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" begin="0.6s" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <line className="axon" x1="0" y1="0" x2="90" y2="50" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2.5" strokeLinecap="round">
                  <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" begin="0.9s" />
                </line>
                <circle className="synapse" cx="90" cy="50" r="6" fill="#ec4899" opacity="0.8">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
                </circle>
              </g>
              
              {/* Synaptic Connections */}
              <line className="synaptic-connection" x1="270" y1="190" x2="450" y2="120" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
              </line>
              <line className="synaptic-connection" x1="590" y1="180" x2="750" y2="200" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.3s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2.3s" repeatCount="indefinite" begin="0.5s" />
              </line>
              <line className="synaptic-connection" x1="430" y1="450" x2="600" y2="500" stroke="rgba(13, 160, 217, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.1s" repeatCount="indefinite" begin="0.3s" />
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2.1s" repeatCount="indefinite" begin="0.3s" />
              </line>
              <line className="synaptic-connection" x1="850" y1="280" x2="900" y2="350" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.4s" repeatCount="indefinite" begin="0.7s" />
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2.4s" repeatCount="indefinite" begin="0.7s" />
              </line>
            </svg>
          </div>
        </div>
        <div className="hero-container container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">Delivering Software Excellence</span>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Transform Your Business with</span>
              <span className="gradient-text title-line"> AI/ML & Software Solutions</span>
            </h1>
            <p className="hero-subtitle">
              We deliver cutting-edge AI/ML and software products for real-time clients. 
              From intelligent automation to web and mobile apps, we turn your vision into reality.
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

      {/* Features Section */}
      <section className="features-section section-padding" ref={featuresRef}>
        <div className="container">
          <div className={`section-header scroll-animate ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Why Choose Prag</span>
            <h2 className="section-title">Delivering Excellence in Every Project</h2>
            <p className="section-subtitle">
              We combine AI/ML expertise with technical excellence to deliver intelligent software solutions that drive real results.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card scroll-animate ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  card.style.setProperty('--mouse-x', `${x}%`);
                  card.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="icon-glow"></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding" ref={testimonialsRef}>
        <div className="container">
          <div className={`section-header scroll-animate ${isVisible ? 'fade-in' : ''}`}>
            <span className="section-badge">Client Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our clients have to say about working with Prag.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card scroll-animate ${isVisible ? 'fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="testimonial-quote-mark">"</div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
                <div className="testimonial-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className={`cta-content ${isVisible ? 'fade-in' : ''}`}>
            <h2 className="cta-title">Ready to Build Your Next AI/ML or Software Solution?</h2>
            <p className="cta-subtitle">
              Let's discuss how we can help transform your business with innovative AI/ML and software products and services.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary large">Start Your Project</Link>
              <Link to="/contact" className="btn-secondary large">Schedule a Call</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
