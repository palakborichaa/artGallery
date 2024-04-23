import React, { useState } from 'react';
import '../Css/Login.css';
import LoginSignup from '../../Pages/LoginSignup';
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showLoginSignup, setShowLoginSignup] = useState(true);
  const [userType, setUserType] = useState('User');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
  
    setFormData({
      email: '',
      password: ''
    });
  };
  const handleSignup = () => {
    setShowLoginSignup(false);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className='signup-as'>
              <input
                type="radio"
                name="UserType"
                value="User"
                checked={userType === 'User'}
                onChange={() => setUserType('User')}
              />
              <label>Buyer</label>
              <input
                type="radio"
                name="UserType"
                value="Admin"
                checked={userType === 'Admin'}
                onChange={() => setUserType('Admin')}
              />
              <label>Seller</label>
            </div>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">Don't have an account? <span onClick={handleSignup}>Sign up here</span></p>
      </div>
    </div>
  );
}

export default Login;
