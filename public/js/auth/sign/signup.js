"use strict";

import createUserData from "../createUserData.js";
import twitterOAuth from "../twitterOAuth.js";
import monitorLoginStatus from "../monitorLoginStatus.js";

const twitterSignup = () => {
  const signUpButton = document.getElementById("signup");

  // 【質問】なぜかアラートをOKにした後でないとfirestoreに書き込みされない。2021/03/27
  signUpButton.addEventListener("click", () => {
    twitterOAuth()
      .then((userData) => {
        return createUserData(userData);
      })
      .then(() => {
        monitorLoginStatus().then((loginStatus) => {
          if (loginStatus) {
            alert(
              "新規登録が完了しました。\n再度ログインボタンを押し、管理画面に進んでください。"
            );
          }
        });
      })
      .catch(() => {
        alert("ログインに成功しました！");
        location.replace("../../admin.html");
      });
  });
};

export default twitterSignup;
