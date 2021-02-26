import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
function Login() {
//State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
// Login
  const login = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };
    try {
      await axios.post("http://localhost:5000/api/login", loginData);
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          setErrorMessage(error.response.data);
        }
      }
      return;
    }

    history.push("/dashboard");
  };
  return (
    <div className="form__div">
      <form action="" onSubmit={login} className="form">
        <h1 className="form__title">Login</h1>
        <h4 className="form__error">{errorMessage}</h4>
        <label htmlFor="Email"></label>
        <input
          className="form__input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password"></label>
        <input
          className="form__input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-grad">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

