import React from 'react'
import Config from '../config.json'

function Hero2() {
  return (
    <div className=" bg-light">
  <div className="container px-3">
    <div className="row">
      <div className="col-lg-6 p-2">
        <img
          className="img-fluid"
          src="https://demo.templateflip.com/super/images/illustrations/hello3.svg"
          alt="hello"
        />
      </div>
      <div className="col-lg-6">
        <div className="mt-5">
          <p className="lead text-uppercase mb-1">Hello!</p>
          <h1
            className=" marker "
          >
            I’m {Config.hero[0].name}
          </h1>
          <p
            className="lead fw-normal mt-3"
          >
           {Config.hero[0].title}
          </p>
          <div
            className="social-nav "
          >
            <nav role="navigation">
              <ul className="nav justify-content-left">
                {Config.social.map((social) =>(
                                  <li className="nav-item">
                                  <a
                                    className="nav-link color-primary"
                                    href={social.link}
                                    title={social.name}
                                  >
                                    <i className={`fa ${social.icon}`} />
                                    <span className="menu-title sr-only">{social.name}</span>
                                  </a>
                                </li>
                ))}


              </ul>
            </nav>
          </div>
          <div
            className="mt-3 "
          >
            <a
              className="btn btn-primary shadow-sm mt-1 hover-effect "
              href="#contact"
            >
              Get In Touch <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero2