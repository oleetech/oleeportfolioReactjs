import React from 'react'
import { Link } from 'react-router-dom'
import Config from '../config.json'


function Navigation() {
    

    return (
<>

  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container">
    <Link className="navbar-brand" href="#" to='/'>
      {Config.site[0].title}
      
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
      {Config.navigation.map((item)=>
                      <li className="nav-item">
                      <Link className="nav-link" to={item.title}>  {item.title} </Link>

                      </li>
           
            )}


      </ul>
      <div className="d-flex"> 
      <button className="btn  btn-primary" >
          Hire Me
        </button>
      </div>

    </div>
  </div>
</nav>



  


    </>
  )
}

export default Navigation