"use strict";

import createUserData from "./createUserData.js";
import twitterOAuth from "./twitterOAuth.js";

const twitterSignin = () => {
  const singInButton = document.getElementById("singn");

  singInButton.addEventListener("click", () => {
    twitterOAuth().then((userData) => {
      createUserData(userData);
    });
  });
};

export default twitterSignin;
