import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Tittle/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

function App() {
  const[playState,setPlaystate]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title SubTitle="Our Programs" Titles="What We Offer"/>
        <Programs/>
        <About setPlaystate={setPlaystate}/>
        <Title SubTitle="Gallery" Titles="Campus Photos"/>
        <Campus/>
        <Title SubTitle="TESTIMONIALS" Titles="What Student Says"/>
        <Testimonial/>
        <Title SubTitle="Contact Us" Titles="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
