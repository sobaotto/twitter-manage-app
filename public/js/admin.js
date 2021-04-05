"use script";

import monitorLoginStatus from "./auth/monitorLoginStatus.js";
import twitterSignout from "./auth/sign/signout.js";
import { PROCESSING, USER } from "./constant.js";

monitorLoginStatus()
  .then(({ loginStatus, uid }) => {
    if (loginStatus) {
      const db = firebase.firestore();

      const collection = db.collection(USER).doc(uid).collection(PROCESSING);

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

            listNumber++;

            processingNumberTd.textContent = listNumber;
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
  })
  .catch(() => {
    alert(
      "ログイン状態が確認できません。\n再度ログインしてからご利用ください。"
    );
    location.replace("../../index.html");
  });

twitterSignout();
