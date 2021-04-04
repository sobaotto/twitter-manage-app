"use script";

const fetchEditItems = async (uid) => {
  const editTarget = document.getElementById("editTarget");

  const db = firebase.firestore();

  // 処理名と処理のdoc.idを格納する
  const editItems = [];

  const USER = "User";
  const PROCESSING = "Processing";

  // データベースから処理名を取得し、プルダウンで表示
  await db
    .collection(USER)
    .doc(uid)
    .collection(PROCESSING)
    .orderBy("updatedAt", "desc")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const processingData = {
          id: doc.id,
          ...doc.data(),
        };

        const processingNameOption = document.createElement("option");

        processingNameOption.textContent = processingData.processingName;
        editTarget.appendChild(processingNameOption);

        editItems.push(processingData);
      });
    });
  // 【質問】上のawaitした処理のforEachが非同期処理なので、
  // ここのreturnはうまくいかない場合がある気がした？2021/04/03
  return editItems;
};

export default fetchEditItems;
