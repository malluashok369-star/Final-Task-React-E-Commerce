import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 5,
    suggestion: '',
    message: ''
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('reviews');

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setShowFeedbackForm(false);
      setFeedback({
        name: '',
        email: '',
        rating: 5,
        suggestion: '',
        message: ''
      });
    }, 3000);
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2026",
      comment: "Absolutely love shopping here! The quality of products is exceptional and delivery was super fast. Customer service responded within minutes to my query.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "March 12, 2026",
      comment: "Best e-commerce experience I've had in years. The product selection is amazing and the prices are competitive. Will definitely shop again!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      verified: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      date: "March 10, 2026",
      comment: "Great products and fast shipping. The only minor issue was packaging could be improved, but overall very satisfied.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      verified: true
    },
    {
      id: 4,
      name: "David Kim",
      rating: 5,
      date: "March 8, 2026",
      comment: "The customer support team went above and beyond to help me with my order. Outstanding service!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Anderson",
      rating: 4,
      date: "March 5, 2026",
      comment: "Quality products at reasonable prices. Would love to see more eco-friendly packaging options.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      verified: true
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 5,
      date: "March 3, 2026",
      comment: "Impressed with the variety of products. The website is easy to navigate and checkout was seamless.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      verified: true
    }
  ];

  const suggestions = [
    {
      id: 1,
      name: "Anonymous Customer",
      suggestion: "Add more payment options like Afterpay and Klarna for flexible payments.",
      votes: 45,
      status: "Under Review"
    },
    {
      id: 2,
      name: "Maria Garcia",
      suggestion: "Implement a loyalty rewards program for frequent shoppers.",
      votes: 67,
      status: "Planned"
    },
    {
      id: 3,
      name: "Robert Taylor",
      suggestion: "Provide more detailed product videos and 360-degree views.",
      votes: 32,
      status: "In Progress"
    },
    {
      id: 4,
      name: "Jennifer Lee",
      suggestion: "Add same-day delivery option for local customers.",
      votes: 89,
      status: "Coming Soon"
    }
  ];

  const improvements = [
    {
      category: "Based on Your Feedback",
      items: [
        "✅ Enhanced packaging for fragile items",
        "✅ Faster delivery times (now 2-3 business days)",
        "✅ 24/7 customer support chat",
        "✅ Mobile app with better navigation",
        "✅ Expanded product categories"
      ]
    },
    {
      category: "Coming Soon",
      items: [
        "🚀 AR try-on feature for fashion items",
        "🚀 AI-powered product recommendations",
        "🚀 Subscription boxes for repeat purchases",
        "🚀 Buy now, pay later options",
        "🚀 Eco-friendly shipping materials"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>We're committed to providing you with the best shopping experience</p>
        </div>
      </section>

      <div className="services-container">
        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Discover the exceptional services that make us your preferred shopping destination</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Fast & Free Shipping</h3>
              <p>Free shipping on orders over $50. Delivery within 2-3 business days nationwide.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Secure Payments</h3>
              <p>Multiple payment options with bank-level encryption for your security.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Easy Returns</h3>
              <p>30-day hassle-free returns. No questions asked, full refund guarantee.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support via chat, email, and phone.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎁</div>
              <h3>Gift Wrapping</h3>
              <p>Complimentary gift wrapping for all special occasions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⭐</div>
              <h3>Loyalty Rewards</h3>
              <p>Earn points on every purchase and redeem for exclusive discounts.</p>
            </div>
          </div>
        </section>

        {/* Reviews & Feedback Section */}
        <section className="reviews-section">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied customers who trust us with their shopping needs</p>
          </div>

          <div className="reviews-tabs">
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Customer Reviews
            </button>
            <button 
              className={`tab-btn ${activeTab === 'suggestions' ? 'active' : ''}`}
              onClick={() => setActiveTab('suggestions')}
            >
              Suggestions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'improvements' ? 'active' : ''}`}
              onClick={() => setActiveTab('improvements')}
            >
              Improvements
            </button>
          </div>

          {activeTab === 'reviews' && (
            <div className="reviews-grid">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <img src={review.avatar} alt={review.name} className="review-avatar" />
                    <div className="review-info">
                      <h4>{review.name}</h4>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                        ))}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    {review.verified && <span className="verified-badge">✓ Verified Purchase</span>}
                  </div>
                  <p className="review-comment">"{review.comment}"</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'suggestions' && (
            <div className="suggestions-grid">
              <div className="suggestions-list">
                {suggestions.map(suggestion => (
                  <div key={suggestion.id} className="suggestion-card">
                    <div className="suggestion-header">
                      <h4>{suggestion.name}</h4>
                      <span className={`status-badge ${suggestion.status.toLowerCase().replace(' ', '-')}`}>
                        {suggestion.status}
                      </span>
                    </div>
                    <p className="suggestion-text">"{suggestion.suggestion}"</p>
                    <div className="suggestion-votes">
                      <button className="vote-btn">👍</button>
                      <span>{suggestion.votes} votes</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="suggestion-cta">
                <h3>Have a Suggestion?</h3>
                <p>We value your input! Share your ideas to help us improve.</p>
                <button className="suggestion-btn" onClick={() => setShowFeedbackForm(true)}>
                  Share Your Idea
                </button>
              </div>
            </div>
          )}

          {activeTab === 'improvements' && (
            <div className="improvements-grid">
              {improvements.map((improvement, idx) => (
                <div key={idx} className="improvement-card">
                  <h3>{improvement.category}</h3>
                  <ul className="improvement-list">
                    {improvement.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="improvement-stats">
                <div className="stat-item">
                  <h4>98%</h4>
                  <p>Customer Satisfaction</p>
                </div>
                <div className="stat-item">
                  <h4>4.8/5</h4>
                  <p>Average Rating</p>
                </div>
                <div className="stat-item">
                  <h4>10K+</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Customer Messages Section */}
        <section className="messages-section">
          <div className="section-header">
            <h2>Customer Messages</h2>
            <p>Real feedback from our valued customers</p>
          </div>
          <div className="messages-grid">
            <div className="message-card">
              <div className="message-icon">💬</div>
              <p>"The customer service team was incredibly helpful when I had issues with my order. They resolved it within hours!"</p>
              <h4>- Amanda P.</h4>
            </div>
            <div className="message-card">
              <div className="message-icon">⭐</div>
              <p>"Best online shopping experience ever! The quality exceeded my expectations and shipping was faster than promised."</p>
              <h4>- Thomas R.</h4>
            </div>
            <div className="message-card">
              <div className="message-icon">🎉</div>
              <p>"I love the rewards program! I've already redeemed points for discounts on my last two purchases."</p>
              <h4>- Nicole K.</h4>
            </div>
            <div className="message-card">
              <div className="message-icon">🚀</div>
              <p>"The website is so easy to navigate and the checkout process is seamless. Will definitely be a repeat customer."</p>
              <h4>- Brian T.</h4>
            </div>
          </div>
        </section>

        {/* Feedback Form Modal */}
        {showFeedbackForm && (
          <div className="feedback-modal" onClick={() => setShowFeedbackForm(false)}>
            <div className="feedback-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setShowFeedbackForm(false)}>×</button>
              <h3>Share Your Feedback</h3>
              <p>We'd love to hear your thoughts and suggestions</p>
              
              {feedbackSubmitted ? (
                <div className="feedback-success">
                  <div className="success-icon">✓</div>
                  <h4>Thank You!</h4>
                  <p>Your feedback has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={feedback.name}
                      onChange={handleFeedbackChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={feedback.email}
                      onChange={handleFeedbackChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Rating</label>
                    <select name="rating" value={feedback.rating} onChange={handleFeedbackChange}>
                      <option value={5}>5 - Excellent</option>
                      <option value={4}>4 - Very Good</option>
                      <option value={3}>3 - Good</option>
                      <option value={2}>2 - Fair</option>
                      <option value={1}>1 - Poor</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message / Suggestion</label>
                    <textarea
                      name="suggestion"
                      rows="4"
                      value={feedback.suggestion}
                      onChange={handleFeedbackChange}
                      required
                      placeholder="Tell us how we can improve or share your experience..."
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-feedback">Submit Feedback</button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;