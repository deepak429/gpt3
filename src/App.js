import React from 'react';
import "./app.css";
import "./index.css";

import {CTA , Brand  , Navbar } from './components';
import {Blog, Features ,Footer , Possiblity,Header,WhatGPT3 } from './container';
 const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
     
    </div>
  )
}
export default App