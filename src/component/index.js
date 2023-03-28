import LoginForm from "./login";
import SignupForm from "./signupform";

import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Main() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <h1>Logo </h1>
        <img alt="Logo" src="/assets/icons/logo1.jpg" className="logo" />

        <p>Create Account</p>
      </div>
      <div className="rightContainer">
        <div className="">
          <div className="row justify-content-center">
            <div>
              <div className="col-md-6">
                <Card>
                  <Card.Body>
                    <h2>{isLogin ? "Login" : "Sign up"}</h2>
                    {isLogin ? (
                      <LoginForm toggleForm={toggleForm} />
                    ) : (
                      <SignupForm toggleForm={toggleForm} />
                    )}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
