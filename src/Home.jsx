import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from './3426526.jpg';
const Home = () => {
  return (
    <section id="header" className="d-flex align-items-center ">
       <div className='container-fluid nav_bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>Hii There, <strong className="brand-name">I'm HEMANT PATIL</strong></h1>
                  <h2 className='my-3' >"Passionate about turning innovative ideas into elegant solutions that make a meaningful impact."</h2>
                  <div className='mt-3' ><Link to="/services" className='btn-get-started'>Get Started</Link></div>
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

export default Home