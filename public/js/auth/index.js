"use script";

import twitterSignin from "./sign/signin.js";
import twitterSignout from "./sign/signout.js";
import twitterSignup from "./sign/signup.js";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(`userId:${user.uid}`);

    const signUpButton = document.getElementById("signup");
    signUpButton.classList.add("hidden");
    const signOutButton = document.getElementById("signout");
    signOutButton.classList.remove("hidden");

    twitterSignout();
    twitterSignin();
  } else {
    twitterSignin();
    twitterSignup();
  }
});
