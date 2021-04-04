"use script";

// 削除ボタンを押した時の挙動
const deleteFunction = async (editingProcessingId, uid) => {
  // 削除ボタンの要素を取得
  const deleteButton = document.getElementById("delete");

  deleteButton.addEventListener("click", async () => {
    const db = firebase.firestore();

    const USER = "User";
    const PROCESSING = "Processing";

    await db
      .collection(USER)
      .doc(uid)
      .collection(PROCESSING)
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
