import React, { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
// import MenuIcon from '@mui/icons-material/Menu';
import "./navbar.css";
import logo from "../../assets/logo.svg";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
        <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#blog">Libary</a></p>
        </div>

        <div className="gpt3_navbar-sign">
        <p>Sign-in</p>
    <button type="button">Sign up</button>
        </div>
        <div className="gpt3_navber-menu">
          {toggleMenu ? (
            <AiOutlineClose color="#fff" onClick={() => setToggleMenu(false)} />
          ) : (
            <AiOutlineBars color="#fff" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                 <p><a href="#home">Home</a></p>
                 <p><a href="#wgpt3">What is GPT3?</a></p>
                 <p><a href="#possibility">Open AI</a></p>
                 <p><a href="#feature">Case Studies</a></p>
                 <p><a href="#blog">Libary</a></p>
                <div className="gpt3_navbar-menu_container-links-sign">
                <p>Sign-in</p>
                <button type="button">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
