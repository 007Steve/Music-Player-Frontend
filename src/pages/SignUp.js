import React, { useState } from "react";
import "../styles/Form.css";
import "../styles/signup.css";
import { useHistory, Link } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
function SignUp() {
  //State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  // Login Data
  const signUp = async (e) => {
    e.preventDefault();

    const signUpData = {
      username,
      email,
      password,
    };
    try {
      await axios.post(
        "https://music-player-apps.herokuapp.com/api/signup",
        signUpData
      );
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
    <div className="signup">
      <div className="form__div">
        <form action="" onSubmit={signUp} className="form">
          <h1 className="form__title">Sign Up</h1>
          <h4 className="form__error">{errorMessage}</h4>

          <label htmlFor="Username"></label>
          <input
            className="form__input"
            type="text"
            placeholder="Username"
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
            type="password"
            placeholder="Password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-grad">
            Sign Up
          </button>
          <p className="form__link">
            Already have an
            <Link to="/login"> account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
