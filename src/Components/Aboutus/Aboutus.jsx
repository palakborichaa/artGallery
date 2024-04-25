import React from 'react';
import './Aboutus.css';
import instagram_icon from '../Assets/instagram.png';
import whatsapp_icon from '../Assets/whatsapp.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are a passionate team dedicated to providing high-quality products/services to our customers.
        Our mission is to connect art enthusiasts to have a good user experience and conduct buying hassle-free from the artists themselves.
      </p><br></br>
      <p>
      A vibrant space where art comes to life, and creativity knows no bounds. Our gallery is more than just a venue; it's a celebration of artistic expression, a hub for cultural exploration, and a home for both emerging and established artists.
      </p><br></br>
      <p>
      Contact us
      </p>
      <p>Call or Whatsapp at +91 9136912135</p>
      <p>Email - business@artgallery.in</p><br></br>
      <p>
      Please note that due to our commitment to maintaining the highest standards of quality, we do not offer an exchange or return policy. Rest assured, every artwork you acquire from us is a testament to our dedication to excellence.
      </p>
      <div className="footer-social-icon">
          <div className="footer-icons-container">
              <img src={instagram_icon} alt="" />
          </div>
        
          <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="" />
          </div>
        </div>
    </div>
  );
};

export default AboutUs;

