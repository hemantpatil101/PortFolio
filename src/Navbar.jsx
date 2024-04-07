import React, { useState } from 'react'
import './index.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  
  const [menu,setMenu] = useState("home");

  return (
    <div>

       <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><h2>HP.</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={()=>{setMenu("home")}}>
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
          {menu=="home" ? <hr/> : <></>}
        </li>  
        
        <li className="nav-item" onClick={()=>{setMenu("about")}}>
          <Link className="nav-link" to="/services">About</Link>
          {menu=="about" ? <hr/> : <></>}
        </li>

        <li className="nav-item" onClick={()=>{setMenu("profiles")}}>
          <Link className="nav-link" to="/about">Profiles</Link>
          {menu=="profiles" ? <hr/> : <></>}
        </li>
        
        
        <li className="nav-item" onClick={()=>{setMenu("contact")}}>
          <Link className="nav-link" to="/contact">Contact</Link>
          {menu=="contact" ? <hr/> : <></>}
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>
          </div>
       </div>
    </div>
    
  )
}

export default Navbar