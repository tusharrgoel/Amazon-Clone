import React, { useState } from "react";
import "./Login.css";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {

    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate("/")
        })
        .catch(error => (alert.message))
  }
  
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if(auth) {
            navigate("/")//succesfully created a user
        }
        })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <h5>Password </h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By Signing-in you agree to my Conditions of Service Agreement. For
          more info see our privacy Notice, our cookies Notice and gather data.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
        >
          Create your Amazon Account{""}
        </button>
      </div>
    </div>
  );
}

export default Login;
