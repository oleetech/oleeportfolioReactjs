import React, { useEffect } from 'react';
import '../css/skill.css'
import Config from '../config.json'

function Skill() {
    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress .progress-bar');
        progressBars.forEach((progressBar) => {
          const width = progressBar.getAttribute('aria-valuenow') + '%';
          progressBar.style.width = width;
        });
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts
    
  return (

<div className="section px-3 px-lg-4 pt-5" id="skills">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="marker marker-center">My Skills</h2>
    </div>
    <div className="text-center">
      <p className="mx-auto mb-3" style={{ maxWidth: 600 }}>
        I am a quick learner and specialize in multitude of skills required for
        Web Application Development and Product Design
      </p>
    </div>
    <div className="bg-light p-3">
      <div className="row">
        <div className="col-md-5">
        {Config.language.map((language) =>(
          <div className="py-1">
          <div className="d-flex text-small fw-bolder">
            <span className="me-auto">{language.name}</span>
            <span>{language.percent}%</span>
          </div>
          <div className="progress my-1">
            <div
              className="progress-bar bg-primary aos-init aos-animate"
              role="progressbar"
              data-aos="zoom-in-right"
              data-aos-delay={100}
              data-aos-anchor=".skills-section"
              style={{ width: "90%" }}
              aria-valuenow={language.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
       ))}




        </div>
        <div className="col-md-5 offset-md-2">
        {Config.framework.map((framework) =>(
          <div className="py-1">
          <div className="d-flex text-small fw-bolder">
            <span className="me-auto">{framework.name}</span>
            <span>{framework.percent}%</span>
          </div>
          <div className="progress my-1">
            <div
              className="progress-bar bg-primary aos-init aos-animate"
              role="progressbar"
              data-aos="zoom-in-right"
              data-aos-delay={100}
              data-aos-anchor=".skills-section"
              style={{ width: "90%" }}
              aria-valuenow={framework.percent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
       ))}
        </div>
      </div>
    </div>
  </div>
</div>
















  )
}

export default Skill

