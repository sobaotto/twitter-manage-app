"use script";

import monitorLoginStatus from "../auth/monitorLoginStatus.js";
import changeForm from "./changeForm.js";
import createFunction from "./createFunction.js";

monitorLoginStatus()
  .then(({ loginStatus, uid }) => {
    if (loginStatus) {
      // フォームの種類を変更する処理
      changeForm();

      // firestoreへの書き込み処理
      createFunction(uid);
    }
  })
  .catch(() => {
    alert(
      "ログイン状態が確認できません。\n再度ログインしてからご利用ください。"
    );
    location.replace("../../index.html");
  });
