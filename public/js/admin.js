"use script";

import { FIRESTORE_COLLECTION_ITEMS } from "../../functions/const/firestore-collection.js";
import monitorLoginStatus from "./auth/monitorLoginStatus.js";

monitorLoginStatus().then(({ loginStatus, uid }) => {
  if (loginStatus) {
    const db = firebase.firestore();

    const collection = db
      .collection("User")
      .doc(uid)
      .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING);

    const table = document.querySelector("table");

    collection
      .orderBy("updatedAt", "desc")
      .get()
      .then((snapshot) => {
        let number = 0;

        // 管理画面に設定した処理一覧を表示する
        snapshot.forEach((doc) => {
          const processingTr = document.createElement("tr");
          const processingNumberTd = document.createElement("td");
          const processingNameTd = document.createElement("td");
          const switchTd = document.createElement("td");

          number++;

          processingNumberTd.textContent = number;
          processingNumberTd.classList.add("text-center");
          processingTr.appendChild(processingNumberTd);

          processingNameTd.textContent = doc.data().processingName;
          processingTr.appendChild(processingNameTd);

          switchTd.textContent = doc.data().switch;
          processingTr.appendChild(switchTd);

          table.appendChild(processingTr);
        });
      });
  }
});
