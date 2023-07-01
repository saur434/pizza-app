import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    if (email && password) {
      if (!isValidEmail(email)) {
        setShowEmailWarning(true);
        setTimeout(() => {
          setShowEmailWarning(false);
        }, 3000);
      } else {
        const user = { email, password };
        dispatch(loginUser(user));
      }
    } else {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }
  };

  const isValidEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
      <div
        className="login-form-container"
        style={{ flex: "1", marginRight: "20px", marginLeft: "2rem" }}
      >
        <Container style={{ marginBottom: "10rem" }}>
          <h1 style={{ textAlign: "center" }}>Login Form</h1>
          <Form className="login-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" style={{ marginTop: "1rem" }}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>

            {showWarning && (
              <Alert variant="danger">Please fill in all the fields.</Alert>
            )}

            {showEmailWarning && (
              <Alert variant="danger">Please enter a valid email address.</Alert>
            )}

            <Button
              variant="primary"
              className="custom-button"
              onClick={loginHandler}
            >
              Login
            </Button>
          </Form>
        </Container>
      </div>

      <div className="login-image-container" style={{ flex: "1" }}>
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1686337442~exp=1686338042~hmac=a5b5b0cadcb9ce0f1e086096e87bfdaea0a7fe0f229121218efb1187a3ff84a2" // Replace with your image URL
          alt="Login"
          className="login-image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Login;
