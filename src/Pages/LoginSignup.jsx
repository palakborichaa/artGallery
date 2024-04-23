import React, { useState } from 'react';
import '../Components/Css/LoginSignup.css';
import Login from '../Components/Login/Login';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showLogin, setShowLogin] = useState(false);
  const [userType, setUserType] = useState('User');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleRegister = () => {
    setShowLogin(false);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        {showLogin ? (
          <Login />
        ) : (
          <>
            <h1>Sign Up</h1>
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
                <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
                <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
              </div>
              <button type="submit">Continue</button>
            </form>
            <p className="loginsignup-login">Already have an account? <span onClick={handleLogin}>Login here</span></p>
            <div className="loginsignup-agree">
              <input type="checkbox" name='' id='' />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LoginSignup;
