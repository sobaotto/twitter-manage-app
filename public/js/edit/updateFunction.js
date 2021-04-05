"use script";

import { FIRESTORE_COLLECTION_ITEMS } from "../../../functions/const/firestore-collection.js";
import getEditingProcessingId from "./getEditingProcessingId.js";
import getFormValue from "./getFormValue.js";

const updateFunction = (db, editItem, uid) => {
  const submitButton = document.getElementById("submit");

  // 更新ボタンを押した時の挙動
  submitButton.addEventListener("click", async () => {
    const editingProcessingId = getEditingProcessingId(editItem);

    const formId = "edit-form";
    const formValue = getFormValue(formId);

    console.log(formValue);
    if (formValue === false) {
      return;
    } else {
      try {
        await db
          .collection(FIRESTORE_COLLECTION_ITEMS.USER)
          .doc(uid)
          .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
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
