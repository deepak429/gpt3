import React from 'react';
import './footer.css';
import gpt3Loho from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="gpt3_what">

    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer-heading">
        <h1 className="gradient_text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3_footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3_footer-links">
      <div className="gpt3_footer-link_logo">
        <img src={gpt3Loho} alt="logo"  />
        <p>Ghari East of Kalish New Delhi 110065, All Rights Reserved</p>
      </div>
      <div className="gpt3_footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>  
      <div className="gpt3_footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> 
       <div className="gpt3_footer-links_div">
        <h4>Get in touch</h4>
        <p>A-14 Ghari East of Kalish ,New Delhi 110065</p>
        <p>7682357-4562</p>
        <p>Gpt3@gmail.com</p>
      </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
    </div>
  )
}

export default Footer