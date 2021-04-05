"use script";

import getFormValue from "../commonFunctions/getFormValue.js";
import { PROCESSING, USER } from "../constant.js";
import getEditingProcessing from "./getEditingProcessing.js";

const updateFunction = (editItems, uid) => {
  const submitButton = document.getElementById("submit");

  // 更新ボタンを押した時の挙動
  submitButton.addEventListener("click", async () => {
    const formId = "edit-form";
    const selectedElement = document.querySelector(
      "input[name=processingType]:checked"
    );

    const formValue = getFormValue(formId, selectedElement.value);

    const db = firebase.firestore();

    const editingProcessing = getEditingProcessing(editItems);

    console.log(formValue);

    if (formValue.processingName === editingProcessing.processingName) {
      alert("同じ名前の処理は作成できません。");
      return;
    }

    if (formValue) {
      try {
        await db
          .collection(USER)
          .doc(uid)
          .collection(PROCESSING)
          .doc(editingProcessing.id)
          .update({
            ...formValue,
            updatedAt: new Date(),
          });

        alert("編集作業が完了しました。\n管理画面に戻ります。");
        location.replace("../admin.html");
      } catch (error) {
        console.error(error);
      }
    }
  });
};

export default updateFunction;
