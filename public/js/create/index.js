"use script";

import monitorLoginStatus from "../auth/monitorLoginStatus.js";
import changeForm from "./changeForm.js";
import createMethod from "./createMethod.js";

monitorLoginStatus()
  .then(({ loginStatus, uid }) => {
    if (loginStatus) {
      // フォームの種類を変更する処理
      const formType = changeForm();
      console.log(formType);

      // firestoreへの書き込み処理
      createMethod(uid, formType);
    }
  })
  .catch(() => {
    alert(
      "ログイン状態が確認できません。\n再度ログインしてからご利用ください。"
    );
    location.replace("../../index.html");
  });
