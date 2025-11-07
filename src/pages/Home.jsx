import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Slider from '../components/Slider.jsx'
import Projects from '../components/Projects.jsx'
import Video from '../components/Video.jsx'
import Request from '../components/Request.jsx'
import LogoMarquee from '../components/LogoMarquee.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Projects />
      <Video />
      <Request />
      <LogoMarquee />
      <Footer />
    </div>
  )
}

export default Home
