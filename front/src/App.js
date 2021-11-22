import React from "react";
import Home from "./Components/Home"
import Courses from "./Components/Courses"
import Nav from "./Components/Nav"
import Pdf from "./Components/Pdf"
import Reference from "./Components/Reference"
import Registration from "./Components/Registration"
import Login from "./Components/Login"
import Footer from "./Components/Footer"
import Cards from "./Components/Cards";

import {Routes, Route } from "react-router";

import './App.css';

const App=()=> {
  return (


    <div className="homepage"> 

    
<Nav/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Courses" element={<Courses />,<Cards/>} />
        <Route exact path="/Pdf" element={<Pdf/>} />
        <Route exact path="/Reference" element={<Reference/>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/Registration" element={<Registration/>} />

        <Route
          path="*"
          render={() => {
            return <h1>404</h1>;
          }}
        />
      </Routes>
       
    </div>
   
  

  );
}

export default App;