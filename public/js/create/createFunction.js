"use script";

import { FIRESTORE_COLLECTION_ITEMS } from "../../const/firestore-collection.js";
import getFormValue from "../commonFunctions/getFormValue.js";
import fetchProcessingNames from "./fetchProcessingNames.js";

// firestoreへの書き込み処理
const createFunction = (uid) => {
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async () => {
    const formId = "create-form";
    const selectedElement = document.querySelector(
      "input[name=processingType]:checked"
    );

    const formValue = getFormValue(formId, selectedElement.value);
    if (!formValue) {
      return;
    }

    const db = firebase.firestore();

    const processingNames = await fetchProcessingNames(uid);

    for (const existingProcessingName of processingNames) {
      console.log(existingProcessingName);

      if (formValue.processingName === existingProcessingName) {
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
          .add({
            ...formValue,
            createdAt: new Date(),
            updatedAt: new Date(),
            executionCounter: 99999,
          });

        alert("追加作業が完了しました。\n管理画面に戻ります。");
        location.replace("../admin.html");
      } catch (error) {
        console.error(error);
      }
    }
  });
};

export default createFunction;
