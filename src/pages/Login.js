import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import { Redirect } from "react-router-dom";
import "../styles/Login.css";
function Login() {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  console.log(email);
  const register = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:5000/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    } catch (error) {
      return console.log(error);
    }
    {
      user ? <Redirect to="/" /> : <Redirect to="/login" />;
    }
    history.push("/dashboard");
  };
  return (
    <div className="form__div">
      <form action="" onSubmit={register} className="form">
        <h1 className="form__title">Login</h1>

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
