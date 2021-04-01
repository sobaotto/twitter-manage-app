"use script";

import getFormValue from "../edit/getFormValue.js";

// firestoreへの書き込み処理
const createMethod = (uid, formType) => {
  const db = firebase.firestore();

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async () => {
    const formId = "create-form";
    const formValue = getFormValue(formId, formType);

    //【質問】 この辺りで定数を宣言すればいいのか？もしくは、定数だけを集めたファイルを作って、exportして他のファイルでも使い回すのか？2021/03/29
    const USER = "User";
    const PROCESSING = "Processing";

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

export default createMethod;
