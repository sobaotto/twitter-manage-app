"use script";

import deleteFunction from "./deleteFunction.js";
import updateFunction from "./updateFunction.js";
import fetchEditItems from "./fetchEditItems.js";
import monitorLoginStatus from "../auth/monitorLoginStatus.js";
import changeForm from "../commonFunctions/changeForm.js";
import reflectEditingProcessing from "./reflectEditingProcessing.js";
import firstRendering from "./firstRendering.js";
import getEditingProcessingId from "./getEditingProcessingId.js";

monitorLoginStatus()
  .then(({ loginStatus, uid }) => {
    if (loginStatus) {
      fetchEditItems(uid).then((editItems) => {
        if (editItems.length === 0) {
          alert("まだ処理が登録されていません。");
          location.replace("../../admin.html");
        }
        firstRendering(editItems);
        reflectEditingProcessing(editItems);

        // フォームの種類を変更する処理
        changeForm();

        const editingProcessingId = getEditingProcessingId(editItems);

        // Firestoreに対する処理
        updateFunction(editingProcessingId, uid);
        deleteFunction(editingProcessingId, uid);
      });
    }
  })
  .catch(() => {
    alert(
      "ログイン状態が確認できません。\n再度ログインしてからご利用ください。"
    );
    location.replace("../../index.html");
  });
