import { useState } from "react";
import { Link } from 'react-router-dom';

import { Sling as Hamburger } from "hamburger-react";
import "./navbar.css";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

 

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Archit</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
          <li> <a className="nav-link" href="#home">Home</a> </li>
            <li> <a className="nav-link" href="#about">About</a> </li>
           
            <li> <a className="nav-link" href="#skill">Skills</a> </li>
            <li> <a className="nav-link" href="#project">Projects</a> </li>
            <li> <a className="nav-link" href="#contact" >Contact</a> </li> 
            
            <li><a href="https://drive.google.com/file/d/1t1SeK_ieHLdEB_MmWtEcwPgn4X6M3BO7/view?usp=sharing" target="_blank"><button type="button" class="btn btn-success">Download CV</button></a></li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
