import React from 'react';
import { useState } from 'react'
import './App.css'
import Section from './Components/Section/IntroPage';
import ProductSection from './Components/ProductDisplay/productpage';
import ServicePage from './Components/ServicePage/random';
import MainCard from './Components/MainCards/Cards';
import Footer from './Components/Footer/FooterPage';
import NavMain from './Components/Header/Navbar';
import WpLogo from '../src/assets/whatsapp.png';
import AboutPage from './Components/Section/aboutPage';
import BlogPage from './Components/Section/blogPage';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className='whatsapp_float'>
        <a href="https://wa.me/7200996170">
          <img src={WpLogo} alt='wp-icon'/>
        </a>
      </div>
      <NavMain />
      <Section />
      <AboutPage/>
      <ServicePage />
      <MainCard />
      {/* <CategorySlider /> */}
      <ProductSection />
      {/* <InstaContainer />
      <RandomElem /> */}
      <BlogPage/>
      <Footer />
    </>

  )
}

export default App
