import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [usernameReg, setusernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const navigate = useNavigate();

  const [regResponse, setregResponse] = useState("");

  const reg = (e) => {
    e.preventDefault();
    console.log(usernameReg);
    axios
      .post("http://localhost:5000/user/register", {
        username: usernameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response.data);
        if(!response.data._message){
          navigate("/LOGIN");
        }
      });
  };

  const goLogin = () => {
    navigate("/login");
  };
  return (
    <div className="signup">
    <Container>
      <h1 className="text-center p-5 bg-dark text-white">Sign Up</h1>
      <form action="/register" method="POST">
        <Form.Group className="mt-5 mx-5" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="text"
            name="name"
            required
            onChange={(e) => {
              setusernameReg(e.target.value);
            }}
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group className="m-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mt-5 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="email"
            required
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
          />
        </Form.Group>

        <p className="mx-5 mt-4 text-danger ">{regResponse}</p>
        <Button
          className="btn btn-dark m-5 px-4 py-2"
          type="submit"
          onClick={reg}
        >
          Register
        </Button>
        <Button
          type="button"
          className="m-0 px-4 py-2"
          variant="outline-dark"
          onClick={goLogin}
        >
          Login
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default Register; 
 
 
 

