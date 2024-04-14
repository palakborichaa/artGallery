import React from 'react';
import instagram_icon from '../Assets/instagram.png';
import whatsapp_icon from '../Assets/whatsapp.png';
import './Footer.css';

const Footer = () => {
    return (
      <div className='footer'>
        <div className="footer-logo">
          <p>ARTIST</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
              <img src={instagram_icon} alt="" />
          </div>
        
          <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>
    )
  }
  
  export default Footer
