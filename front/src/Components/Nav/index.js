import React from "react";
import { Link } from "react-router-dom";
import {Button ,Card,Nav,Navbar,Form,FormControl } from 'react-bootstrap';


import './style.css';

const NavBar = () => {
  return (
  
    
    
    <div className="nav">

    <ul>

    <Link to="">
        <li className="li1"> E-learning programming</li>
      </Link>
    
      <Link to="/">
        <li> Home</li>
      </Link>
      <Link to="/Courses">
        <li>Coures</li>
      </Link>

      <Link to="/saved">
        <li>My-courses</li>
      </Link>

  
      <Link to="/Login">
        <li>Log in</li>
      </Link>
      <Link to="/Registration">
        <li>SignUp</li>
      </Link>
    </ul>
    </div>
  );
};

export default NavBar;