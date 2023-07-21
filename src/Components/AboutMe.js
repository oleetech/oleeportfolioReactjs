import React from 'react'
import Config from '../config.json'
import avater from '../images/olee.jpg'
function AboutMe() {
  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h4 my-2">Hello! I’m {Config.hero[0].name}.</h2>
          <p>
          {Config.hero[0].description}
          </p>
          <div className="row mt-3">
            <div className="col-sm-2">
              <div className="pb-1">Age:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">28</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Email:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">{Config.contact[0].email}</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Skype:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">{Config.contact[0].skype}</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Phone:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">{Config.contact[0].phone}</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Address:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">New Delhi, India</div>
            </div>
            <div className="col-sm-2">
              <div className="pb-1">Staus:</div>
            </div>
            <div className="col-sm-10">
              <div className="pb-1 fw-bolder">Available</div>
            </div>
          </div>
        </div>
        <div
          className="col-md-5 offset-md-1 aos-init aos-animate"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <img
            className="rounded img-fluid mt-2"
            src={avater}
            width={400}
            height={400}
            alt="Walter Patterson"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutMe