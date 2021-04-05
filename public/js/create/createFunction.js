"use script";

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

    const db = firebase.firestore();

    //【質問】 この辺りで定数を宣言すればいいのか？もしくは、定数だけを集めたファイルを作って、exportして他のファイルでも使い回すのか？2021/03/29
    const USER = "User";
    const PROCESSING = "Processing";

    const processingNames = await fetchProcessingNames(uid);

    console.log("processingNames: ", processingNames);
    console.log("processingNames[0]: ", processingNames[0]);

    for (const existingProcessingName of processingNames) {
      console.log(existingProcessingName);

      if (formValue.processingName === existingProcessingName) {
        alert("同じ名前の処理は作成できません。");
        return;
      }
    }

    console.log("forof抜けた");

    if (formValue) {
      try {
        await db
          .collection(USER)
          .doc(uid)
          .collection(PROCESSING)
          .add({
            ...formValue,
            createdAt: new Date(),
            updatedAt: new Date(),
          });

        alert("追加作業が完了しました。\n管理画面に戻ります。");
        location.replace("../admin.html");
      } catch (error) {
        console.log("add error");
      }
    }
  });
};

export default createFunction;
