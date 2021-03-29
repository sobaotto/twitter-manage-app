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
          location.replace("../../index.html");
        },
        (error) => {
          console.error("Signout failed!", error);
        }
      );
  });
};

export default twitterSignout;
