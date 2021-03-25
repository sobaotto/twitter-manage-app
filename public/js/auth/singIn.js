"use strict";

import addUserData from "./addUserData.js";
import twitterOAuth from "./twitterOAuth.js";
import getFormValue from "./getFormValue.js";

const twitterSignin = () => {
  const singInButton = document.getElementById("sing-in");

  singInButton.addEventListener("click", () => {
    const formData = getFormValue();

    if (formData) {
      twitterOAuth().then((userData) => {
        addUserData(formData, userData);
      });
    } else {
      return;
    }
  });
};

export default twitterSignin;
