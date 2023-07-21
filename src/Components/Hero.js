import React from 'react'
import Config from '../config.json'
import Olee from '../images/olee.jpg'
function Hero() {
    const heroTitle = Config.hero[0].title;
    const heroDescription = Config.hero[0].description;
  return (
    <div className='row'>
  <div className='col-md-12'>
  {/* Hero 2 - Bootstrap Brain Component */}
  
  <section className="bg-light ">
    <div className="container overflow-hidden">
      <div className="row align-items-lg-center justify-content-lg-between">
        <div className="col-md-6 col-lg-6 ">
          <h1 className="display-3 fw-bold mb-3">   {heroTitle}</h1>
          <p className="fw-bold mb-5">
           {heroDescription}
          </p>

        </div>
        <div className="col-md-6 col-lg-5 text-center">
        <svg
  id="10015.io"
  viewBox="0 0 480 480"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <clipPath id="blob">
      <path
        fill="#474bff"
        d="M397.5,337.5Q353,435,252,414.5Q151,394,90,317Q29,240,91,165Q153,90,249,73.5Q345,57,393.5,148.5Q442,240,397.5,337.5Z"
      />
    </clipPath>
  </defs>
  <image
    x={0}
    y={0}
    width="100%"
    height="100%"
    clipPath="url(#blob)"
    xlinkHref={Olee}
    preserveAspectRatio="xMidYMid slice"
  />
</svg>




        </div>
      </div>
    </div>
  </section>
  </div>
</div>
  )
}

export default Hero