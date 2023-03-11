import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_conatiner">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password </h5>
          <input type="password" />

          <button className="login_signInButton">Sign In</button>
          <p>
            By Signing-in you agree to my Conditions of Service Agreement. For
            more info see our privacy Notice, our cookies Notice and gather
            data.
          </p>
          <button className="login_registerButton">Create your Amazon Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
