import React from 'react'
import Navbar from './Navbar';
import Card from './Card';
import Data from './Sdata';

const About = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-center' style={{ color: '#31d8a6' }}>My Profiles</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              {
                 Data.map((val,ind)=>{
                  return <Card key={ind} imgsrc={val.imgsrc} 
                  title={val.title} info={val.info} lin={val.lin}/>
                 })
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About