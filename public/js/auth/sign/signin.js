"use strict";

import twitterOAuth from "../twitterOAuth.js";
import monitorLoginStatus from "../monitorLoginStatus.js";

const twitterSignin = () => {
  const signInButton = document.getElementById("signin");

  signInButton.addEventListener("click", () => {
    const loginStatus = monitorLoginStatus();
    if (loginStatus) {
      location.replace("../../admin.html");
    }
  });
};

export default twitterSignin;
