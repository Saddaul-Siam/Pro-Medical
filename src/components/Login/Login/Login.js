import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { handleGoogleSignIn, SingnOut, user, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

/*   const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password);
  };

  const handleLogin = () => {
    handleUserLogin(email, password);
  };
 */
  return (
    <div className="div d-flex justify-content-center align-items-center">
      <div>
        {/* <div className="form-input mt-5">
          <input
            onChange={hanldeEmail}
            className="mt-2 p-2"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            onChange={hanldePassword}
            className="mt-2 p-2"
            type="password"
            placeholder="Password"
          />
          <br />
          <div className="login-regiater-btn mt-4">
            <button
              onClick={handleRegister}
              className="btn btn-primary me-1"
            >
              Register
            </button>
            <button onClick={handleLogin} className="btn btn-success ms-1">
              Login
            </button>
          </div>
        </div> */}
        <div className="login-btn mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-warning m-2"
          >
            google sign in
          </button>
          {/* <button onClick={handleGithubLogin} className="btn btn-dark m-2">
            Github sign in
          </button> */}
        </div>
      </div>
    </div >
  );
};

export default Login;