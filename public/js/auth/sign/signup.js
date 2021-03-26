"use strict";

import createUserData from "../createUserData.js";
import twitterOAuth from "../twitterOAuth.js";
import monitorLoginStatus from "../monitorLoginStatus.js";

const twitterSignup = () => {
  const signUpButton = document.getElementById("signup");

  signUpButton.addEventListener("click", () => {
    twitterOAuth()
      .then((userData) => {
        createUserData(userData);
      })
      .then(() => {
        const loginStatus = monitorLoginStatus();
        if (loginStatus) {
          location.replace("../../admin.html");
        }
      });
  });
};

export default twitterSignup;
