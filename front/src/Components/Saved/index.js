import React from "react";
import axios from "axios";
import "./style.css";
import { useState, useEffect } from "react";

const Saved = () => {
  const [local, setLocal] = useState([]);
  const [email, setEmail] = useState("");
  const [Courses, setCourses] = useState("");
  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getData = async () => {
    if (local) {
      const item = await axios.get(
        `https://localhost:4000/allsave/${local.email}`
      );
      setEmail(item.data);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);
  useEffect(() => {
    getData();
  }, [local]);
  const unsaved = async (id) => {
    await axios.put(`https://localhost:4000/unsave/${local.email}/${id}`);
    getLocalStorage();
    setCourses();
  };

  return (
    <section className={"Courses"}>
      {email ? (
        <div className="courses-content">
          {Courses.map((item) => {
            return (
              <div className="courses">
                <img src={item.img} alt="img" className="courses-imag" />
                <div className="courses-details">
                  <h1 className="c_name">{item.name}</h1>

                  <p className="c-desc">{item.dacs}</p>
                  <button
                    className="btnadd"
                    id={item._id}
                    onClick={() => unsaved(item._id)}
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
export default Saved;
