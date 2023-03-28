import React from "react";

function SignupForm({ toggleForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign up successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="Your Name"
        required
        placeholder="Enter Your Name "
      />
      <br />

      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter Your Email"
      />
      <br />

      <input
        type="password"
        id="password"
        name="password"
        required
        placeholder="Enter Password"
      />
      <br />
      <br />

      <input
        type="password"
        id="password"
        name="password"
        required
        placeholder="Repeat Your Password"
      />
      <br />
      <button type="submit">Create account </button>
      <br />
      <p>
        Already have an account?{" "}
        <a href="#" onClick={toggleForm}>
          Login
        </a>
      </p>
    </form>
  );
}

export default SignupForm;
