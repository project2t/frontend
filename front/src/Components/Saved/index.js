import React from "react";
import axios from "axios";
import "./style.css"
import {useState, useEffect} from "react";

const Saved = () => {
    const [local, setLocal] = useState([]);

    const getLocalStorage = async () => {
        const item = await JSON.parse(localStorage.getItem("newUser"));
        setLocal(item);
    };

    const getData = async () => {
        if (local) {
            const item = await axios.get(`https://localhost:4000/allsave${local.email}`);
            setAccount(item.data);
        }

    }; 
    useEffect(() => {
        getLocalStorage();
   
    }, []);

    useEffect(() => {
        getData();
    }, [local]);
    const removeFavorite = (id) => {
        axios.put(`https://localhost:4000/unsave/${local.email}/${id}`);
        getLocalStorage();
    };
        }
    return (
        <section className={"Courses-section"}>
            {email ? (
                <div className="courses-warrap">
                    {cards.map((item) => {
                        return (
                            <div className="courses" >
                                <img src={item.img} alt="img" className="courses-imag"/>
                                <div className="courses-details">
                                    <h1 className="c_name" >{item.name}</h1>
    
                                    <p className="c-desc">{item.dacs}</p>
                                    <button className="btnadd" id={item._id} onClick={() => removeOrAdd(item._id)}></button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : ("")}
        </section>

    );

export default Saved;


