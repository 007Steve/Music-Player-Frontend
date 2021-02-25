import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Form.css";
import axios from "axios";

function Form({ title }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  console.log(username);

  

  const register =  (e) => {
    e.preventDefault();
   fetch('http://localhost:5000/api/signup',{
      method: 'POST',
      credentials: 'include',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        email,
        password
      })
      
    })
    history.push("/login")
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      const signupData = {
        username,
        email,
        password
      }
      
      await axios.post("http://localhost:5000/api/signup",signupData)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="form__div">
      <form action="" onSubmit={register} className="form">
        <h1 className="form__title">{title}</h1>
        <label htmlFor="Username"></label>
        <input
          className="form__input"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          <button type="submit"  className="btn-grad">
          {title}
        </button>
      </form>
   
    </div>
  );
}

export default Form;
