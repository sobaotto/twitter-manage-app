"use script";

import getFormValue from "./edit/getFormValue.js";

const db = firebase.firestore();

const collection = db.collection("functions");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async () => {
  const formId = "create-form";
  const formValue = getFormValue(formId);

  if (formValue === false) {
    return;
  } else {
    try {
      await collection.add({
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
