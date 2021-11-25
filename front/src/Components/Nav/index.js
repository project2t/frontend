import React from "react";
import { Link } from "react-router-dom";
import { FaHome,FaAdn} from 'react-icons/fa';
import {Button ,Card,Nav,Navbar,Form,FormControl } from 'react-bootstrap';


import './style.css';

const NavBar = () => {
  return (
  

    
    <div className="nav">

    <ul>
      <Link to="/">
        <li><FaHome/> Home</li>
      </Link>
      <Link to="/Courses">
        <li> <FaAdn/>Coures</li>
      </Link>

      <Link to="/saved">
        <li>Saved</li>
      </Link>
      <Link to="/Reference">
        <li>Reference</li>
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