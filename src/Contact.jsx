import React, { useState } from 'react'



const Contact = () => {

  const [data,setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent = (event) =>{
    const {name,value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name] : value,
      }
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}`);
  };

  return (
    <>
    <div className='my-5'>
        <h1 className='text-center'>Contact Me</h1>
    </div>
    <div className='container contact_div'>
     <div className='row'>
      <div className='col-md-6 col-10 mx-auto'>
         <form onSubmit={formSubmit}>
         <div class="mb-3">
         <label for="exampleFormControlInput1" className="form-label">Full Name</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
         name="fullname"
         value={data.fullname}
         onChange={InputEvent}
         />
         </div>
         
         <div class="mb-3">
         <label for="exampleFormControlInput1" className="form-label">Phone</label>
         <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone No."
         name="phone"
         value={data.phone}
         onChange={InputEvent}
         />
         </div>

         <div class="mb-3">
         <label for="exampleFormControlInput1" className="form-label">Email address</label>
         <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
         name="email"
         value={data.email}
         onChange={InputEvent}
         />
         </div>


         <div class="mb-3">
         <label for="exampleFormControlTextarea1" className="form-label">Message</label>
         <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
         name="msg"
         value={data.msg}
         onChange={InputEvent}
         ></textarea>
         </div>

         <div class="col-12">
         <button className="btn btn-primary" type="submit">Submit form</button>
         </div>

         </form>
         
      </div> 
     </div>
    </div>
    </>
  )
}

export default Contact