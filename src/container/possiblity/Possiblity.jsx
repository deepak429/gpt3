import React from 'react'
import './possiblity.css';
import  possiblityImage  from '../../assets/possibility.png';
const Possiblity = () => {
  return (
    <div className="gpt3_what">
    <div className="gpt3_possiblity section_padding" id="possiblity">
    <div className="gpt3_possiblity-image">
           <img src={possiblityImage}alt="" srcset="" />
    </div>
    <div className="gpt_possiblity-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
    </div>
    </div>
  )
}

export default Possiblity