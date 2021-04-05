"use script";
import getEditingProcessingId from "./getEditingProcessingId.js";

// 削除ボタンを押した時の挙動
const deleteFunction = async (db, editItem, uid) => {
  // 削除ボタンの要素を取得
  const deleteButton = document.getElementById("delete");

  deleteButton.addEventListener("click", async () => {
    const editingProcessingId = getEditingProcessingId(editItem);
    await db
      .collection("User")
      .doc(uid)
      .collection("Processing")
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
