import React from 'react'

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
            I’m Walter Patterson
          </h1>
          <p
            className="lead fw-normal mt-3"
          >
            Web Developer &amp; Mobile Application Developer
          </p>
          <div
            className="social-nav "
          >
            <nav role="navigation">
              <ul className="nav justify-content-left">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://twitter.com/templateflip"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter" />
                    <span className="menu-title sr-only">Twitter</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.facebook.com/templateflip"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook" />
                    <span className="menu-title sr-only">Facebook</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/templateflip"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/"
                    title="LinkedIn"
                  >
                    <i className="fa fa-linkedin" />
                    <span className="menu-title sr-only">LinkedIn</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.behance.net/templateflip"
                    title="Behance"
                  >
                    <i className="fa fa-behance" />
                    <span className="menu-title sr-only">Behance</span>
                  </a>
                </li>
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