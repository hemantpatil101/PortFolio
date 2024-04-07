import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from './4136918.jpg';

const Services = () => {
  return (
    <section id="header" className="d-flex align-items-center ">
       <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>Let Me<strong className="brand-name"> Introduce Myself</strong></h1>
                  <h2 className='my-3' >I am Hemant Patil from Pune Maharashtra.  I am 3rd year UnderGrad at IIIT Nagpur</h2>
                  <h2 className='my-3' >I love Competitive Programming and I enjoy Problem Solving.</h2>
                  <h2 className='my-3' >I am currently <b>4 Star</b> Rated on CodeChef and <b>Expert</b> on CodeForces.</h2>
                  <h2 className='my-3' >I also enjoy Developing Web-Technologies and machine Learning.</h2>
                  
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <picture><img src={homeimg} className='img-fluid animated' alt="home img"/></picture>
              
            </div>
            </div>
            </div>
            
        </div>
       </div>
    </section>
  )
}

export default Services