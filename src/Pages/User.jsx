import React, { useState } from "react";
import "../Styles/Signup.css";
import Login from "../Components/Login";
import UserRegistration from "../Components/UserRegistration";
import MerchantRegistration from "./MerchantRegistration";

const User = () => {
  const [mode, setMode] = useState("sign-in"); // Initial mode is 'sign-in'

  const [isRegistered, setIsRegistered] = useState(false);

  const handleUserRegistration = (data) => {
    setIsRegistered(data);
  };

  const handleSignUpClick = () => {
    setMode("sign-up"); // Switch mode to 'sign-up'
  };

  const handleSignInClick = () => {
    setMode("sign-in"); // Switch mode to 'sign-in'
  };

  return (
    <div className={`mycontainer ${mode === "sign-up" ? "sign-up-mode" : ""}`}>
      <div class="forms-mycontainer">
        <div class="signin-signup">
          {isRegistered ? (
            <UserRegistration sendDataToLogin={handleUserRegistration}/>
          ) : (
            <Login sendDataToLogin={handleUserRegistration} />
          )}

<MerchantRegistration/>
        </div>
      </div>

      <div class="panels-mycontainer">
        <div class="panel left-panel">
          <div class="content">
            <h3>New to our community ?</h3>
            <p>
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button
              class="mybtn transparent"
              id="sign-up-mybtn"
              onClick={handleSignUpClick}
            >
              Merchant
            </button>
          </div>
          <img
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            class="image"
            alt=""
          />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button
              class="mybtn transparent"
              id="sign-in-mybtn"
              onClick={handleSignInClick}
            >
              User
            </button>
          </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            class="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default User;
