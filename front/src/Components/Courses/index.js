import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style.css";

const Courses = () => {
  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [remAdd, setRemAdd] = useState([]);
  const [courses, setCourses] = useState("")
  const date = () => {
    axios
      .get("https://localhost:4000/getallcourses")
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const User = JSON.parse(localStorage.getItem("newUser"));

  useEffect(() => {
    if (localStorage.getItem("newUser"));
    setEmail(localStorage.getItem("newUser"));
  }, []);

  const getDataEmail = async () => {
    const item = await axios.get(`https://localhost:4000/getallusers`);
    setRemAdd(item.data);
  };

  const saved = async (id) => {
    let test = [];

    remAdd.forEach((item) => {
      test.push(item._id);
    });

    if (test.includes(id)) {
      document.getElementById(`${id}`).innerHTML = "add";

      await axios.put(`https://localhost:4000/unsave/${User.email}/${id}`);
    } else {
      document.getElementById(`${id}`).innerHTML = "unsave";

      await axios.put(`https://localhost:4000/savedckeck/${User.email}/${id}`);
    }
    test = [];
    getDataEmail();
  };
  return (
    <section className={"Courses-section"}>
      {email ? (
        <div className="courses-warrap">
          {courses.map((item) => {
            return (
              <div className="courses">
                <img src={item.img} alt="img" className="courses-imag" />
                <div className="courses-details">
                  <h1 className="c_name">{item.name}</h1>

                  <p className="c-desc">{item.dacs}</p>
                  <button
                    className="btnadd"
                    id={item._id}
                    onClick={() => saved(item._id)}
                  ></button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Courses;



