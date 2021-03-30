"use strict";

import createUserData from "../createUserData.js";
import twitterOAuth from "../twitterOAuth.js";
import monitorLoginStatus from "../monitorLoginStatus.js";

const twitterSignup = () => {
  const signUpButton = document.getElementById("signup");

  signUpButton.addEventListener("click", () => {
    twitterOAuth()
      .then((userData) => {
        return createUserData(userData);
      })
      .then(() => {
        monitorLoginStatus()
          .then((loginStatus) => {
            if (loginStatus) {
              alert("新規登録が完了しました。\n管理画面に移動します。");
              location.replace("../../admin.html");
            }
          })
          .catch(() => {
            alert(
              "新規登録に失敗しました。\n時間を置いてから再度お試しください。"
            );
          });
      })
      .catch(() => {
        alert("既に会員登録されています。\n管理画面に移動します。");
        location.replace("../../admin.html");
      });
  });
};

export default twitterSignup;
