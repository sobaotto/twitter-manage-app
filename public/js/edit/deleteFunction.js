"use script";
import getEditingFunctionId from "./getEditingFunctionId.js";

const db = firebase.firestore();

// 削除ボタンを押した時の挙動
const deleteFunction = (functions) => {
  // 削除ボタンの要素を取得
  const deleteButton = document.getElementById("delete");

  deleteButton.addEventListener("click", async () => {
    const editingFunctionId = await getEditingFunctionId(functions);
    try {
      console.log(editingFunctionId);
      await db.collection("functions").doc(editingFunctionId).delete();
      alert("削除が完了しました。\n管理画面に戻ります。");
      // location.replace("../admin.html");
    } catch (error) {
      console.error(error);
    }
  });
};

export default deleteFunction;
