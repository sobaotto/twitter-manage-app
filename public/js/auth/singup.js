"use strict";

import addUserData from "./createUserData.js";
import twitterOAuth from "./twitterOAuth.js";

const twitterSignup = () => {
  const singInButton = document.getElementById("singup");

  singInButton.addEventListener("click", () => {
    twitterOAuth().then((userData) => {
      addUserData(userData);
    });
  });
};

export default twitterSignup;
