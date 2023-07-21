import React, { useEffect } from 'react';
import Hero from '../Components/Hero'
import Her2 from '../Components/Hero2'
import Skill from '../Components/Skill'
import Portfolio from '../Components/PortfolioSection'
import Contact from '../Components/Contact'
import Hero2 from '../Components/Hero2';
import AboutMe from '../Components/AboutMe';
import Experience from '../Components/Experience';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
function Home() {


  return (
    <div>

        <Hero2/>
        <div class="wave-bg"></div>
        <Hero/>
<AboutMe/>

        <Portfolio/>
        <Skill/>

        <Contact/>
        <Experience/>
        <Testimonials/>
        <Footer/>
        <div id="scrolltop" ><a class="btn btn-primary" href="#top"><span class="icon"> <i class="fas fa-arrow-up "></i></span></a></div>
    </div>
  )
}

export default Home