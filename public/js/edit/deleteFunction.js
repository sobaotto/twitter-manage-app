"use script";
import { FIRESTORE_COLLECTION_ITEMS } from "../../../functions/const/firestore-collection.js";
import getEditingProcessingId from "./getEditingProcessingId.js";

// 削除ボタンを押した時の挙動
const deleteFunction = async (db, editItem, uid) => {
  // 削除ボタンの要素を取得
  const deleteButton = document.getElementById("delete");

  deleteButton.addEventListener("click", async () => {
    const editingProcessingId = getEditingProcessingId(editItem);
    await db
      .collection(FIRESTORE_COLLECTION_ITEMS.USER)
      .doc(uid)
      .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
      .doc(editingProcessingId)
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
