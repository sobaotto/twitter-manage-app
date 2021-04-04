"use script";

import getEditingProcessing from "./getEditingProcessing.js";

// 削除ボタンを押した時の挙動
const deleteFunction = async (editItems, uid) => {
  // 削除ボタンの要素を取得
  const deleteButton = document.getElementById("delete");

  deleteButton.addEventListener("click", async () => {
    const db = firebase.firestore();

    const USER = "User";
    const PROCESSING = "Processing";

    const editingProcessing = getEditingProcessing(editItems);

    await db
      .collection(USER)
      .doc(uid)
      .collection(PROCESSING)
      .doc(editingProcessing.id)
      .delete()
      .then(() => {
        alert("削除が完了しました。\n管理画面に戻ります。");
        location.replace("../admin.html");
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export default deleteFunction;
