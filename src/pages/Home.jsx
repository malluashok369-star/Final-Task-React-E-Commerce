import React from 'react';
import './Home.css';

const Home = () => {
  const TruckIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );

  const ShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const StarIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  const CreditCardIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const StarSmallIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to <span className="highlight">STACKLY</span></h1>
          <p className="hero-description">
            Your ultimate destination for premium shopping experience. Discover the finest collection of 
            fashion, electronics, home appliances, and more. We bring you quality products at unbeatable 
            prices with exceptional customer service.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">Explore Collections</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <TruckIcon />
              </div>
              <h3>Free Shipping Worldwide</h3>
              <p>Free delivery on orders over $50. Fast and reliable shipping to your doorstep.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldIcon />
              </div>
              <h3>Secure Payment</h3>
              <p>100% secure payment methods. Your transactions are safe with us.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <StarIcon />
              </div>
              <h3>Quality Guarantee</h3>
              <p>Premium quality products with satisfaction guaranteed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <CreditCardIcon />
              </div>
              <h3>Rewards Program</h3>
              <p>Earn points on every purchase. Redeem for exciting rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - All categories from screenshot */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Categories</h2>
            <p>Explore our wide range of products across different categories</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image dresses"></div>
              <div className="category-info">
                <h3>Dresses</h3>
                <p>Stylish and trendy dresses for every occasion</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image electronics"></div>
              <div className="category-info">
                <h3>Electronics Accessories</h3>
                <p>Premium gadgets and accessories for tech lovers</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image jewels"></div>
              <div className="category-info">
                <h3>Jewels</h3>
                <p>Exquisite jewelry to elevate your style</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image appliances"></div>
              <div className="category-info">
                <h3>Home Appliances</h3>
                <p>Smart appliances for modern living</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image sandals"></div>
              <div className="category-info">
                <h3>Sandals</h3>
                <p>Comfortable and fashionable footwear</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image books"></div>
              <div className="category-info">
                <h3>Books</h3>
                <p>Best-selling books for every reader</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image furniture"></div>
              <div className="category-info">
                <h3>Furniture Items</h3>
                <p>Modern furniture to transform your space</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image wearable"></div>
              <div className="category-info">
                <h3>Wearable Tech</h3>
                <p>Smart watches and fitness trackers</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image sale"></div>
              <div className="category-info">
                <h3>Sale</h3>
                <p>Amazing deals and discounts on top products</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image sports"></div>
              <div className="category-info">
                <h3>Sports Gear</h3>
                <p>Performance apparel and equipment for every athlete</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image beauty"></div>
              <div className="category-info">
                <h3>Beauty</h3>
                <p>Top skincare, makeup, and wellness essentials</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image outdoor"></div>
              <div className="category-info">
                <h3>Outdoor</h3>
                <p>Gear and accessories for camping, hiking, and travel</p>
                <a href="/categories" className="category-link">Shop Now <ArrowRightIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Club Section */}
      <section className="premium-section">
        <div className="premium-overlay"></div>
        <div className="container">
          <div className="premium-content">
            <span className="premium-badge">Exclusive</span>
            <h2>Join Our Premium Club</h2>
            <p>
              Our premium membership will give you exclusive access to our early-bird sales, 
              new arrivals and other special offers.
            </p>
            <div className="premium-features">
              <div className="premium-feature">
                <StarSmallIcon />
                <span>Early Access to Sales</span>
              </div>
              <div className="premium-feature">
                <StarSmallIcon />
                <span>Exclusive Member Discounts</span>
              </div>
              <div className="premium-feature">
                <StarSmallIcon />
                <span>Free Shipping on Orders</span>
              </div>
            </div>
            <button className="btn-premium">Join Now</button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Discover our most popular and trending products</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image product1"></div>
              <div className="product-info">
                <h3>Designer Dress</h3>
                <p className="product-category">Women's Fashion</p>
                <p className="product-price">$79.99</p>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image product2"></div>
              <div className="product-info">
                <h3>Wireless Headphones</h3>
                <p className="product-category">Electronics</p>
                <p className="product-price">$89.99</p>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image product3"></div>
              <div className="product-info">
                <h3>Gold Plated Necklace</h3>
                <p className="product-category">Jewelry</p>
                <p className="product-price">$149.99</p>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image product4"></div>
              <div className="product-info">
                <h3>Smart Watch</h3>
                <p className="product-category">Wearable Tech</p>
                <p className="product-price">$199.99</p>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image product5"></div>
              <div className="product-info">
                <h3>Leather Handbag</h3>
                <p className="product-category">Accessories</p>
                <p className="product-price">$129.99</p>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image product6"></div>
              <div className="product-info">
                <h3>Bluetooth Speaker</h3>
                <p className="product-category">Audio</p>
                <p className="product-price">$69.99</p>
                <button className="btn-add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Join thousands of satisfied customers worldwide</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <StarSmallIcon /><StarSmallIcon /><StarSmallIcon /><StarSmallIcon /><StarSmallIcon />
              </div>
              <p>"Amazing products and excellent customer service! The quality exceeded my expectations."</p>
              <h4>- Sarah Johnson</h4>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <StarSmallIcon /><StarSmallIcon /><StarSmallIcon /><StarSmallIcon /><StarSmallIcon />
              </div>
              <p>"Fast shipping and great prices. I love the rewards program! Highly recommended."</p>
              <h4>- Michael Chen</h4>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <StarSmallIcon /><StarSmallIcon /><StarSmallIcon /><StarSmallIcon /><StarSmallIcon />
              </div>
              <p>"Best online shopping experience! The variety of products is amazing."</p>
              <h4>- Emily Rodriguez</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;