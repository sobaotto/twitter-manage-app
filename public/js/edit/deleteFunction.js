"use script";
import getEditingFunctionId from "./getEditingFunctionId.js";

// 削除ボタンを押した時の挙動
const deleteFunction = async (editItem) => {
  const db = firebase.firestore();
  // 削除ボタンの要素を取得
  const deleteButton = document.getElementById("delete");

  await deleteButton.addEventListener("click", async () => {
    const editingFunctionId = getEditingFunctionId(editItem);
    await db
      .collection("functions")
      .doc(editingFunctionId)
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
