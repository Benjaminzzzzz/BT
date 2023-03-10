import React from "react";
import "../CSS/Login.css";

function Login() {
  return (
    <div className="bg-login">
      <div className="container">
        <div className="box-pic">
          {" "}
          <img src="/images/Logo1.png" alt="Logo" />
          <h1>SUT UPCYCLE</h1>
        </div>
        <div className="box-form">
          <h1>LOG IN</h1>{" "}
          <h6>ENTER YOUR EMAIL AND PASSWORD TO ACCESS YOUR ACCOUNT</h6>
          <h5>Email</h5>
          <input type={"email"} />
          <h5>Password</h5>
          <input type={"password"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
