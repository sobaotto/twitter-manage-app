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
        },
        (error) => {
          console.log("Signout failed!");
        }
      );
  });
};

export default twitterSignout;
