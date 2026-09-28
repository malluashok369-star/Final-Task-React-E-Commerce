import React from 'react';
import './About.css';

const About = () => {
  // SVG Icons
  const HeartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4"/>
      <path d="M12 12v4l2 2-2 2-2-2 2-2v-4"/>
      <path d="M5 12h14"/>
      <path d="M12 5v2"/>
      <path d="M7 12v2"/>
      <path d="M17 12v2"/>
    </svg>
  );

  const GlobeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const RocketIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About <span className="highlight">STACKLY</span></h1>
          <p className="about-hero-description">
            Redefining E-Commerce Excellence Since 2020. We blend premium curation with personalized service to make every shopping moment feel effortless and inspiring.
          </p>
          <p className="about-hero-description">
            From fast delivery to trusted support, our mission is to bring the best brands, best prices, and best experience under one roof.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, LUSTRALIS emerged from a simple yet powerful vision: to create an 
                e-commerce platform that combines quality products with exceptional service. What started 
                as a small passion project has grown into a trusted destination for shoppers worldwide.
              </p>
              <p>
                Our journey began when our founder, Sarah Johnson, realized that online shopping often 
                lacked the personal touch and quality assurance found in physical stores. Determined to 
                bridge this gap, she built LUSTRALIS on the principles of transparency, quality, and 
                customer-first approach.
              </p>
              <p>
                Today, we serve over 100,000+ satisfied customers across 50+ countries, offering 
                carefully curated products ranging from fashion and electronics to home appliances and 
                accessories. Every product in our collection is hand-picked to ensure it meets our 
                rigorous quality standards.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <h3>100K+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Countries Served</p>
                </div>
                <div className="stat">
                  <h3>10K+</h3>
                  <p>Products</p>
                </div>
                <div className="stat">
                  <h3>99%</h3>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <RocketIcon />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower people worldwide by providing access to high-quality products at fair prices, 
                while delivering an exceptional shopping experience that exceeds expectations.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <GlobeIcon />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the world's most trusted e-commerce platform, where quality meets convenience, 
                and every customer feels valued and respected.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <HeartIcon />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, Innovation, Customer-Centricity, and Sustainability are at the heart of 
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="difference-section">
        <div className="container">
          <div className="section-header">
            <h2>What Makes Us Different</h2>
            <p>We go above and beyond to deliver the best shopping experience</p>
          </div>
          <div className="difference-grid">
            <div className="difference-card">
              <div className="difference-icon">
                <ShieldIcon />
              </div>
              <h3>Quality Assurance</h3>
              <p>Every product undergoes rigorous quality checks before reaching our customers.</p>
            </div>
            <div className="difference-card">
              <div className="difference-icon">
                <AwardIcon />
              </div>
              <h3>Expert Curation</h3>
              <p>Our team of experts hand-picks products that meet our high standards.</p>
            </div>
            <div className="difference-card">
              <div className="difference-icon">
                <UsersIcon />
              </div>
              <h3>24/7 Customer Support</h3>
              <p>Round-the-clock assistance to ensure your satisfaction.</p>
            </div>
            <div className="difference-card">
              <div className="difference-icon">
                <GlobeIcon />
              </div>
              <h3>Global Shipping</h3>
              <p>Fast and reliable delivery to over 50 countries worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership</h2>
            <p>The passionate minds behind LUSTRALIS</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image sarah"></div>
              <h3>Sarah Johnson</h3>
              <p>Founder & CEO</p>
              <div className="team-social">
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image michael"></div>
              <h3>Michael Chen</h3>
              <p>Chief Operating Officer</p>
              <div className="team-social">
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image emily"></div>
              <h3>Emily Rodriguez</h3>
              <p>Head of Product</p>
              <div className="team-social">
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image david"></div>
              <h3>David Kim</h3>
              <p>Customer Experience Director</p>
              <div className="team-social">
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-overlay"></div>
        <div className="container">
          <div className="values-content">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <CheckIcon />
                <span>Customer First</span>
              </div>
              <div className="value-item">
                <CheckIcon />
                <span>Quality Excellence</span>
              </div>
              <div className="value-item">
                <CheckIcon />
                <span>Sustainable Practices</span>
              </div>
              <div className="value-item">
                <CheckIcon />
                <span>Innovation Driven</span>
              </div>
              <div className="value-item">
                <CheckIcon />
                <span>Transparent Operations</span>
              </div>
              <div className="value-item">
                <CheckIcon />
                <span>Community Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Trusted by thousands of happy shoppers</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>The best shopping experience I've ever had! Quality products and amazing customer service."</p>
              <h4>- Jennifer Martinez</h4>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>LUSTRALIS has become my go-to for all my shopping needs. Highly recommended!"</p>
              <h4>- Robert Thompson</h4>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p>Fast shipping, great prices, and exceptional quality. 5 stars all the way!</p>
              <h4>- Lisa Anderson</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Excellence?</h2>
            <p>Join thousands of satisfied customers who shop with LUSTRALIS</p>
            <button className="cta-button">Start Shopping Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;