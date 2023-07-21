import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './css/marker.css'
import './css/card.css';
import './css/style.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));

const About = ()=> <h1>About</h1>
const Project = ()=> <h1>Project</h1>
const Contact = ()=> <h1>Contact</h1>
root.render(
  <React.StrictMode>
    <Router>
<Navigation/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);



