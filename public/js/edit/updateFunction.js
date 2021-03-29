"use script";

import getEditingProcessingId from "./getEditingProcessingId.js";
import getFormValue from "./getFormValue.js";

const updateFunction = (editItem, uid) => {
  const submitButton = document.getElementById("submit");

  // 更新ボタンを押した時の挙動
  submitButton.addEventListener("click", async () => {
    const editingProcessingId = getEditingProcessingId(editItem);

    const formId = "edit-form";
    const formValue = getFormValue(formId);

    const db = firebase.firestore();

    const USER = "User";
    const PROCESSING = "Processing";

    console.log(formValue);
    if (formValue === false) {
      return;
    } else {
      try {
        await db
          .collection(USER)
          .doc(uid)
          .collection(PROCESSING)
          .doc(editingProcessingId)
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
