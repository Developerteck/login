import React from "react";
import "./login.css";
import { FaApple } from "react-icons/fa";

function LoginForm({ toggleForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        required
        placeholder="Email"
      />
      <br />

      <input
        type="password"
        id="password"
        name="password"
        required
        placeholder="Password"
      />
      <br />
      <button type="submit">Login</button>
      <p>
        <p>Or Login with </p>
        <FaApple /> <br />
        Don't have an account?
        <a href="#" onClick={toggleForm}>
          <br />
          Create Account
          <br />
          <br />
          <br />
        </a>
      </p>
    </form>
  );
}
export default LoginForm;
