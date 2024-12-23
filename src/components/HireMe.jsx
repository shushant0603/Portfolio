import React, { useState } from 'react';
import './HireMe.css';

function HireMe() {


  return (
    <div className="main">
      <div className='left'>
        <div>
          <h1>Contact Me</h1>
        </div>
        <div className='details'>
          <h2><i class='bx bx-mail-send'></i> <a href="mailto:shushantkumar0603@gmail.com">shushantkumar0603@gmail.com</a></h2>
          <h2><i class='bx bx-phone-call'></i>  <a href="tel:+917352279080">+91 7352279080</a></h2>
          <h2><i class='bx bx-map'></i>Patna, Bihar, India</h2>
        </div>

        <div className="social-media-links">
          <a href="https://github.com/shushant0603" target="_blank"><i className="bx bxl-github"></i></a>
          <a href="https://x.com/shushantku68275" target="_blank"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.linkedin.com/in/shushant-kumar-771775290" target="_blank"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/shushant0625" target="_blank"><i className="bx bxl-instagram"></i></a>
        </div>
        <button className='left_button'>Download CV</button>
      </div>
      <div className='right'>
        <input type="text" className='name' placeholder='name' />
        <input type="email" className='email' placeholder='email' />
        <textarea className='message' placeholder='message' ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default HireMe;