import React from 'react';
import './Helpus.css';

const Helpus = () => {
    return (
        <div className="help-page">
          <h1>Help & Support</h1>
          <p>
            Welcome to our Help & Support page. Here, you'll find answers to commonly asked questions and helpful information to enhance your experience on our art gallery website.
          </p>
          <div className="faq-section">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className="faq-item">
              <h3>1. How do I buy artwork on your website?</h3>
              <p>
                To purchase artwork, simply browse through our collection, select the pieces you love, and add them to your cart. Proceed to checkout and follow the prompts to complete your purchase securely.
              </p>
            </div>
            <div className="faq-item">
              <h3>2. Do you offer international shipping?</h3>
              <p>
                Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary depending on your location. Please refer to our Shipping & Delivery page for more information.
              </p>
            </div>
            <div className="faq-item">
              <h3>3. What payment methods do you accept?</h3>
              <p>
                We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Rest assured, all transactions on our website are secure and encrypted.
              </p>
            </div>
          </div>
          <div className="contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have any further questions or need assistance, please don't hesitate to contact our customer support team. You can reach us via email at support@yourartgallery.com or by phone at +123456789.
            </p>
          </div>
        </div>
      );
    }
    

export default Helpus
