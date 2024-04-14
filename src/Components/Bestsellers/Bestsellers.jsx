import React from 'react';
import './Bestsellers.css';
import voyage from '../Assets/voyage.png';
import fairlady from '../Assets/fairlady.png';

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <h1>Bestsellers</h1>
      <div className='image1'>
        <img src={voyage} alt=""/>
        <div className="details">
          <p>Voyage by Jay Chung</p>
          <p>$34,000</p>
        </div>
      </div>
      <div className='image2'>
      <div className="details2">
      
        
          <p>My Fair Lady</p>
          <p>$28,000</p>
        </div>
        <img src={fairlady} alt=""/>
      </div>
    </div>
  );
};

export default Bestsellers;
