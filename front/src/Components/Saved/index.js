
/*
import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import './style.css';
import Courses from "../Courses";

const  Saved = () => {
const navigate = useNavigate();
const [Movies, setMovies] = useState([]);
  const [api, setapi] = useState("http://localhost:5000/get");

  const getMyAPI = async () => {
    const response = await axios.get(api);
    console.log(response.data);
    setMovies(response.data);
  };

  useEffect(() => {
    getMyAPI();
  }, []);

  const specificCard = (n) => {
    navigate(`/Card/${n}`, { state: api });
  };


}

///////////////delete un saved
const unsaved = (id) => {

  const [local, setLocal] = useState([]);


  axios.delete(`http://localhost:5000/delete/ ${local.email}/${id}`);
 
};

*/
/*
    {/* <Nav /> */ //}
    /*
     { Courses.map  ((item, i) => {
        return (
          <div>
            <div >
              {" "}
              <h1>{item.ame}</h1>
              <img src={item.img} alt="courses" />
            </div>
            
            <button  onClick={() => unsaved(item._id)}/>
          </div>

        
          )  }


         ) }
export default Saved;


*/