import React from 'react'
import Config from '../config.json'
function Testimonials() {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="testimonials">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="marker marker-center">Client Testimonials</h2>
    </div>
    <div className="row">
      {Config.testimonial.map((testimonial)=>(
              <div className="col-md-6 mb-5 "

              >
                <div className="d-flex ms-md-3">
                  <span>
                    <i className="fa fa-2x fa-quote-left" />
                  </span>
                  <span className="m-2">
                    {testimonial.quote}
                    <i className="fa fa-2x fa-quote-right" />
                  </span>
                  
                </div>
                <div className="d-flex justify-content-end align-items-end">
                  <div className="text-end me-2">
                    <div className="fw-bolder">{testimonial.client}</div>
                    <div className="text-small">{testimonial.position}</div>
                  </div>
                  <img
                    className="me-md-3 rounded"
                    src={testimonial.image}
                    width={96}
                    height={96}
                    alt="client 1"
                  />
                </div>
              </div>
      ))}




    </div>
  </div>
</div>

  )
}

export default Testimonials