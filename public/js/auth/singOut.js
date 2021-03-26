"use strict";

const twitterSignout = () => {
  const singOutButton = document.getElementById("singout");

  singOutButton.addEventListener("click", async () => {
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
