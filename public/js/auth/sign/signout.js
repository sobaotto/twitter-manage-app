"use strict";

const twitterSignout = () => {
  const signOutButton = document.getElementById("signout");

  signOutButton.addEventListener("click", () => {
    firebase
      .auth()
      .signOut()

      .then(
        () => {
          console.log("Signout successful!");
          const signUpButton = document.getElementById("signup");
          signUpButton.classList.remove("hidden");
          const signOutButton = document.getElementById("signout");
          signOutButton.classList.add("hidden");
        },
        (error) => {
          console.error("Signout failed!", error);
        }
      );
  });
};

export default twitterSignout;
