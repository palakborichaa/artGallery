import React from 'react'
import './Hero.css';
import hero from '../Assets/hero.png';
import Bestworks from '../Bestworks/Bestworks';
const scrollToNextSection = () => {
    const nextSection = document.getElementById('hero');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
const Hero = () => {
  return (
<div className='hero'>
    <div className='hero-img'>
        <img src={hero} alt=''/>
        <div className='explore-now'>
            <button  onClick={scrollToNextSection}>Explore now</button>
            <div id='hero'>

</div>
        </div>
    </div>
</div>

  )
}

export default Hero;
