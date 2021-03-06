"use script";

import { FIRESTORE_COLLECTION_ITEMS } from "../../../functions/const/firestore-collection";

const editItem = async (db, uid) => {
  const editTarget = document.getElementById("editTarget");

  // 処理名と処理のdoc.idを格納する
  const processings = [];

  // データベースから処理名を取得し、プルダウンで表示
  await db
    .collection(FIRESTORE_COLLECTION_ITEMS.USER)
    .doc(uid)
    .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
    .orderBy("updatedAt", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const processingData = {
          id: doc.id,
          processingName: doc.data().processingName,
        };

        const processingNameOption = document.createElement("option");

        processingNameOption.textContent = processingData.processingName;
        editTarget.appendChild(processingNameOption);

        processings.push(processingData);
      });
    });
  return processings;
};

export default editItem;
