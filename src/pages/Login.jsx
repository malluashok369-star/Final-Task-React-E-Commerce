import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Generate random OTP
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    return otp;
  };

  // Mock send email verification
  const sendVerificationEmail = (email) => {
    const otp = generateOTP();
    setUserEmail(email);
    setShowOTP(true);
    // In production, this would send an actual email
    console.log(`OTP sent to ${email}: ${otp}`);
    alert(`Demo OTP: ${otp} (Check console for OTP)`);
    return otp;
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Basic validation
    if (!loginData.email || !loginData.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    // In production, this would be an API call
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find(u => u.email === loginData.email && u.password === loginData.password);
    
    if (user && user.verified) {
      setSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    } else if (user && !user.verified) {
      setErrorMessage('Please verify your email first');
      sendVerificationEmail(loginData.email);
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage('');
    
    // Validation
    const newErrors = {};
    if (!signupData.firstName) newErrors.firstName = 'First name is required';
    if (!signupData.lastName) newErrors.lastName = 'Last name is required';
    if (!signupData.phone) newErrors.phone = 'Phone number is required';
    if (!signupData.email) newErrors.email = 'Email is required';
    if (!signupData.password) newErrors.password = 'Password is required';
    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (signupData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (storedUsers.find(u => u.email === signupData.email)) {
      setErrorMessage('User already exists with this email');
      return;
    }
    
    // Send verification email
    sendVerificationEmail(signupData.email);
    
    // Store user data temporarily
    localStorage.setItem('tempUser', JSON.stringify({
      ...signupData,
      verified: false
    }));
  };

  // Handle OTP Verification
  const handleOTPVerification = (e) => {
    e.preventDefault();
    
    if (otpCode === generatedOTP) {
      // Save user to localStorage
      const tempUser = JSON.parse(localStorage.getItem('tempUser') || '{}');
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      const newUser = {
        ...tempUser,
        verified: true,
        createdAt: new Date().toISOString()
      };
      
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      localStorage.removeItem('tempUser');
      
      setOtpVerified(true);
      setSuccessMessage('Email verified successfully! Please login.');
      setTimeout(() => {
        setShowOTP(false);
        setIsLogin(true);
        setOtpVerified(false);
        setSuccessMessage('');
        setSignupData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }, 2000);
    } else {
      setErrorMessage('Invalid OTP. Please try again.');
    }
  };

  // Resend OTP
  const resendOTP = () => {
    sendVerificationEmail(userEmail);
    setErrorMessage('');
  };

  if (showOTP) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-card otp-card">
            <button className="back-btn" onClick={() => {
              setShowOTP(false);
              setErrorMessage('');
            }}>
              ← Back
            </button>
            <div className="auth-header">
              <h2>Email Verification</h2>
              <p>We've sent a verification code to</p>
              <p className="email-display">{userEmail}</p>
            </div>
            
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            
            <form onSubmit={handleOTPVerification} className="auth-form">
              <div className="form-group">
                <label>Enter OTP Code</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  maxLength="6"
                  required
                />
              </div>
              
              <button type="submit" className="auth-btn">
                Verify Email
              </button>
            </form>
            
            <div className="resend-section">
              <p>Didn't receive the code?</p>
              <button onClick={resendOTP} className="resend-btn">
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
            <p>{isLogin ? 'Login to your account' : 'Sign up to get started'}</p>
          </div>
          
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
          
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          
          {isLogin ? (
            // Login Form
            <form onSubmit={handleLogin} className="auth-form">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-link">Forgot Password?</a>
              </div>
              
              <button type="submit" className="auth-btn">
                Login
              </button>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignup} className="auth-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({...signupData, firstName: e.target.value})}
                  />
                  {errors.firstName && <span className="field-error">{errors.firstName}</span>}
                </div>
                </div>
                <div className="form-row">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({...signupData, lastName: e.target.value})}
                  />
                  {errors.lastName && <span className="field-error">{errors.lastName}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  value={signupData.phone}
                  onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={signupData.email}
                  onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label>Create Password</label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  value={signupData.password}
                  onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                />
                {errors.password && <span className="field-error">{errors.password}</span>}
              </div>
              
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                />
                {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
              </div>
              
              <button type="submit" className="auth-btn">
                Sign Up
              </button>
            </form>
          )}
          
          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                className="switch-btn"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrorMessage('');
                  setSuccessMessage('');
                }}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;