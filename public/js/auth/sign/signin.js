"use strict";

import monitorLoginStatus from "../monitorLoginStatus.js";

const twitterSignin = () => {
  const signInButton = document.getElementById("signin");

  signInButton.addEventListener("click", () => {
    monitorLoginStatus().then((loginStatus) => {
      if (loginStatus) {
        location.replace("../../admin.html");
      }
    });
  });
};

export default twitterSignin;
