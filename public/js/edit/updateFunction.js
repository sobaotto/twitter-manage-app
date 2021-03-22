"use script";

import getEditingFunctionId from "./getEditingFunctionId.js";
import getFormValue from "./getFormValue.js";

const updateFunction = (editItem) => {
  const db = firebase.firestore();
  const submitButton = document.getElementById("submit");

  // 更新ボタンを押した時の挙動
  submitButton.addEventListener("click", async () => {
    const editingFunctionId = getEditingFunctionId(editItem);

    const formId = "edit-form";
    const formValue = getFormValue(formId);

    console.log(formValue);
    if (formValue === false) {
      return;
    } else {
      try {
        await db
          .collection("functions")
          .doc(editingFunctionId)
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
