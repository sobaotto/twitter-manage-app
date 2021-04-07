"use script";

import getFormValue from "./edit/getFormValue.js";
import monitorLoginStatus from "./auth/monitorLoginStatus.js";
import { FIRESTORE_COLLECTION_ITEMS } from "../../functions/const/firestore-collection.js";

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
            .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
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
