import React from 'react'
import Config from '../config.json'
function Footer() {
  return (
    <footer className="pt-4 pb-4 text-center bg-light">
  <div className="container">
    <div className="my-3">
      <div className="h4">      {Config.site[0].title} </div>
      <p>{Config.hero[0].title}</p>
      <div className="social-nav">
        <nav role="navigation">
          <ul className="nav justify-content-center">
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
    </div>
    <div className="text-small text-secondary">
      <div className="mb-1">© {Config.site[0].title}. All rights reserved.</div>
      <div>
        Design -{" "}
        <a className='text-muted link-underline-warning' href="https://oleetech.com/" target="_blank">
        {Config.site[0].title}
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer