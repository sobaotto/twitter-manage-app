"use script";

import { FIRESTORE_COLLECTION_ITEMS } from "../const/firestore-collection.js";
import monitorLoginStatus from "./auth/monitorLoginStatus.js";
import twitterSignout from "./auth/sign/signout.js";

monitorLoginStatus()
  .then(({ loginStatus, uid }) => {
    if (loginStatus) {
      const db = firebase.firestore();

      const collection = db
        .collection(FIRESTORE_COLLECTION_ITEMS.USER)
        .doc(uid)
        .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING);

      const table = document.querySelector("table");

      collection
        .orderBy("updatedAt", "desc")
        .get()
        .then((snapshot) => {
          let listNumber = 0;

          // 管理画面に設定した処理一覧を表示する
          snapshot.forEach((doc) => {
            const processingTr = document.createElement("tr");
            const processingNumberTd = document.createElement("td");
            const processingNameTd = document.createElement("td");
            const switchTd = document.createElement("td");
            const processingType = document.createElement("td");
            const startTime = document.createElement("td");

            listNumber++;

            processingNumberTd.textContent = listNumber;
            processingNumberTd.classList.add("text-center");
            processingTr.appendChild(processingNumberTd);

            switch (doc.data().processingType) {
              case "post":
                processingType.textContent = "投稿";
                break;
              case "favorite":
                processingType.textContent = "いいね";
                break;
              case "reply":
                processingType.textContent = "リプライ";
                break;
            }
            processingTr.appendChild(processingType);

            processingNameTd.textContent = doc.data().processingName;
            processingTr.appendChild(processingNameTd);

            switchTd.textContent = doc.data().switch;
            processingTr.appendChild(switchTd);

            startTime.textContent = doc.data().startTime;
            processingTr.appendChild(startTime);

            table.appendChild(processingTr);
          });
        });
    }
  })
  .catch(() => {
    alert(
      "ログイン状態が確認できません。\n再度ログインしてからご利用ください。"
    );
    location.replace("../../index.html");
  });

twitterSignout();
