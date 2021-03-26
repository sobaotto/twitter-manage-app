"use script";

import getFormValue from "./edit/getFormValue.js";
import monitorLoginStatus from "./auth/monitorLoginStatus.js";

monitorLoginStatus().then(({ loginStatus, uid }) => {
  if (loginStatus) {
    const db = firebase.firestore();

    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", async () => {
      const formId = "create-form";
      const formValue = getFormValue(formId);

      if (formValue === false) {
        return;
      } else {
        try {
          await db
            .collection("User")
            .doc(uid)
            .collection("Processing")
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
  }
});
