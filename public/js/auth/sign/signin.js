"use strict";

import twitterOAuth from "../twitterOAuth.js";
import monitorLoginStatus from "../monitorLoginStatus.js";

const twitterSignin = () => {
  const signInButton = document.getElementById("signin");

  signInButton.addEventListener("click", () => {
    twitterOAuth().then(() => {
      monitorLoginStatus()
        .then((loginStatus) => {
          if (loginStatus) {
            location.replace("../../admin.html");
          }
        })
        .catch(() => {
          alert(
            "会員登録がされていません。\n新規登録ボタンから登録をしてください。"
          );
        });
    });
  });
};

export default twitterSignin;
