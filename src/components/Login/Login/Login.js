import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Login.css'

const Login = () => {
  const { handleGoogleSignIn, setUser, error, handleUserLogin } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_url = location.state?.from || '/';
  // console.log("come form", location.state?.from);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleLogin = () => {
    handleUserLogin(email, password)
      .then((result) => {
        setUser(result.user)
        history.push(redirect_url)
      })
  };
  const signInWithGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user)
        history.push(redirect_url)
      })
  }

  return (
    <div className="div d-flex justify-content-center align-items-center shadow border-3 background padding">
      <div className="shadow border-3 m-5 p-5 bg-white login-form">
        <div className="d-d-flex justify-content-center">
          <h2>Login Form</h2>
        </div>
        <div className="form-input">
          <input onChange={handleEmail} className="mt-2 p-2 border-0 input-field" type="email" placeholder="Email" />
          <br />
          <input onChange={handlePassword} className="mt-2 p-2 border-0 input-field" type="password" placeholder="Password" />
          <br />
          <div className="d-flex justify-content-center">
            <p>{error.message}</p>
          </div>
          <div className="login-register-btn mt-4 d-flex justify-content-center">
            <button onClick={handleLogin} className="btn btn-primary rounded-pill btn-regular">Login</button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link to="/register" className="">New user please register</Link>
          </div>
        </div>
        <div className="login-btn mt-4 d-flex justify-content-center">
          <button onClick={signInWithGoogle} className="btn btn-warning btn-regular rounded-pill"><i className="fab fa-google"></i> Google sign in </button>
        </div>
      </div>
    </div >
  );
};

export default Login;