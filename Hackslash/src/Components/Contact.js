// import { response } from 'express';
import React, { useState } from 'react'

export default function Contact() {
  const [userName,setUserName]=useState('');
  const [userEmail,setEmail]=useState('');
  const [userPhone,setPhone]=useState('');
  const [userMessage,setMessage]=useState('');

  let userData = {
       userName:userName,
       userEmail:userEmail,
       userPhone:userPhone,
       userMessage:userMessage
  }
  const handelForm=(e)=>{
    e.preventDefault();
    fetch("/api/contact",{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(userData)
    })
    if(userData !== 'undefine')
    {
      console.log("Data Successfully uploade");
      e.target.reset();
    }
    else
    {
      console.log("Opps Unable to insert the data !!!");
    }
  }
  return (
   <div id='contact'>
   <section class="contact_section layout_padding">
    <div class="container ">
      <div class="heading_container">
        <h2>
          Contact Us
        </h2>
        <img src="./assests/images/telephone-white.png" alt=""/>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <form action="/" method="POST"  onSubmit={handelForm}>
            <div>
              <input type="text" name="name" id='name'
              onChange={e=> setUserName(e.target.value)} placeholder="Name" />
            </div>
            <div>
              <input type="email"
               onChange={e=> setEmail(e.target.value)}
                name="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" name="phone" 
               onChange={e=> setPhone(e.target.value)}
              placeholder="Phone Number" />
            </div>
            <div>
              <input type="text" name="message" 
               onChange={e=> setMessage(e.target.value)}
              class="message-box" placeholder="Message" />
            </div>
            <div class="d-flex ">
              <button  type="submit">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section> 

  <section class="info_section layout_padding">
    <div class="container">
      <div class="info_contact">
        <div class="row">
          <div class="col-md-4">
            <a href="123466567">
              <img src="./assests/images/telephone-white.png" alt=""/>
              <span>
                Call : 12334567890
              </span>
            </a>
          </div>
          <div class="col-md-4">
            <a href="index.html">
              <img src="./assests/images/envelope-white.png" alt=""/>
              <span>
               abc@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-lg-9">
          <div class="info_form">
            <form action="">
              <input type="text" placeholder="Enter your email"/>
              <button>
                send
              </button>
            </form>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <div class="info_social">
            {/* <div>
              <a href="#">
                <img src="./assests/images/fb.png" alt=""/>
              </a>
            </div> */}
            {/* <div>
              <a href="#">
                <img src="./assests/images/twitter.png" alt=""/>
              </a>
            </div> */}
            {/* <div>
              <a href="">
                <img src="./assests/images/linkedin.png" alt=""/>
              </a>
            </div> */}
            <div>

              <a href="https://instagram.com/geca_hackslash_club?igshid=MzRIODBiNWFIZA==">
                <img src="./assests/images/instagram.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

   </div>
  )
}
