"use script";

import deleteFunction from "./deleteFunction.js";
import updateFunction from "./updateFunction.js";
import editItem from "./editItem.js";
import monitorLoginStatus from "../auth/monitorLoginStatus.js";
import changeForm from "../create/changeForm.js";

monitorLoginStatus()
  .then(({ loginStatus, uid }) => {
    if (loginStatus) {
      // フォームの種類を変更する処理
      changeForm();

      editItem(uid).then((editItem) => {
        if (editItem.length === 0) {
          alert("まだ処理が登録されていません。");
          location.replace("../../admin.html");
        }
        updateFunction(editItem, uid);
        deleteFunction(editItem, uid);
      });
    }
  })
  .catch(() => {
    alert(
      "ログイン状態が確認できません。\n再度ログインしてからご利用ください。"
    );
    location.replace("../../index.html");
  });
