import React from 'react'
import Hero from '../Components/Hero/Hero';
import Bestworks from '../Components/Bestworks/Bestworks';
import Sculptures from '../Components/Sculptures/Sculptures';
import Bestsellers from '../Components/Bestsellers/Bestsellers';
import Newsletter from '../Components/Newsletter/Newsletter';
import Footer from '../Components/Footer/Footer';
const Home = () => {
  return (
    <div>
      <Hero/>
      <Bestworks/>
      <Sculptures/>
      <Bestsellers/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
