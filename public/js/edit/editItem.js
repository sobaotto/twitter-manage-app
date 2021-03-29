"use script";

const editItem = async (uid) => {
  const editTarget = document.getElementById("editTarget");

  const db = firebase.firestore();

  // 処理名と処理のdoc.idを格納する
  const processings = [];

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
