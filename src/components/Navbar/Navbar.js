import React, { useState, useRef } from 'react'
import { GiPostOffice } from "react-icons/gi";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const ref = useRef(null);
  const doClick = () => ref.current?.scrollIntoView({behavior: 'smooth'})
const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>
        {/* logo part */}
        <div className='logo'>
        <h1><GiPostOffice className="icon"/>HarGharDak</h1>
        </div>
        {/* menu part */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
                <li><a href='/HomePage'>Home</a></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="/">DNK</Link></li>
                <li onClick={doClick}><NavLink to="#contact">Contact Us</NavLink></li>

                <button className='btn' style={buttonStyle}>
                <a href="#">Register/SignIn</a>
                </button>
            </ul>
        </div>
        
        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
            <img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/G20.png" alt="1" style={imageStyle} />
            </li>
            <li>
            <img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/right_side_logo.png" alt="2" style={imageStyle} />
            </li>
            <li>
            <img src="https://www.indiapost.gov.in/_layouts/15/images/DOP.Portal.UILayer/India_Post_Logo_With_Text.svg" alt="3" style={imageStyle} />
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
    </nav>
    </>
  )
};

const imageStyle = {
  width: '100px', // Adjust the width as needed
  height: '50px',
  marginBottom: '1px',
};

const buttonStyle = {
  backgroundColor: '#89CFF0',
  color: '#F0FFFF',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '35px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Navbar

