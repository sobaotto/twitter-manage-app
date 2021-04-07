"use script";

import { FIRESTORE_COLLECTION_ITEMS } from "../../const/firestore-collection.js";
import getFormValue from "../commonFunctions/getFormValue.js";
import getEditingProcessing from "./getEditingProcessing.js";

/**
 * 予約情報を更新する
 * @param {*} editItems 修正したい項目
 * @param {*} uid ログインユーザー
 */
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

    const checkDuplicateNamesArray = editItems.filter(
      (editItem) => editItem.processingName !== editingProcessing.processingName
    );
    console.log("checkDuplicateNamesArray: ", checkDuplicateNamesArray);

    for (const processing of checkDuplicateNamesArray) {
      console.log(
        "formValue.processingName === processing.processingName",
        `${formValue.processingName} === ${processing.processingName}`
      );

      if (formValue.processingName === processing.processingName) {
        alert("同じ名前の処理は作成できません。");
        return;
      }
    }

    if (formValue) {
      try {
        await db
          .collection(FIRESTORE_COLLECTION_ITEMS.USER)
          .doc(uid)
          .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
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
