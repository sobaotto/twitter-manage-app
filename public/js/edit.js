"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const submitButton = document.getElementById("submit");
const deleteButton = document.getElementById("delete");

const editTarget = document.getElementById("editTarget");

// 処理名と処理のdoc.idを格納する
const functions = [];

// データベースから処理名を取得し、プルダウンで表示
collection
  .orderBy("updatedAt", "desc")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const functionData = {
        id: doc.id,
        functionName: doc.data().functionName,
      };

      const functionNameOption = document.createElement("option");

      functionNameOption.textContent = functionData.functionName;
      editTarget.appendChild(functionNameOption);

      functions.push(functionData);
    });
  });

// 更新ボタンを押した時の挙動
submitButton.addEventListener("click", async () => {
  const selectedIndex = editTarget.selectedIndex;
  const editingFunctionName = editTarget.options[selectedIndex].value;

  let editingFunctionId = "";

  functions.forEach((functionData) => {
    if (functionData.functionName === editingFunctionName) {
      editingFunctionId = functionData.id;
    }
  });

  const form = document.getElementById("edit-form");
  // フォームの入力内容を取得
  const _switch = form.switch.value;
  const processingType = form.processingType.value;
  const tweet = form.tweet.value;
  const startTime = form.startTime.value;
  const functionName = form.functionName.value;

  // 更新する
  try {
    await collection.doc(editingFunctionId).update({
      functionName: functionName,
      tweet: tweet,
      startTime: startTime,
      processingType: processingType,
      switch: _switch,
      updatedAt: new Date(),
    });

    alert("編集作業が完了しました。\n管理画面に戻ります。");
    location.replace("../admin.html");
  } catch (error) {
    console.log("add error");
  }
});

// 削除ボタンを押した時の挙動
deleteButton.addEventListener("click", async () => {
  const selectedIndex = editTarget.selectedIndex;
  const editingFunctionName = editTarget.options[selectedIndex].value;

  let editingFunctionId = "";

  functions.forEach((functionData) => {
    if (functionData.functionName === editingFunctionName) {
      editingFunctionId = functionData.id;
    }
  });

  try {
    await collection.doc(editingFunctionId).delete();
    alert("削除が完了しました。\n管理画面に戻ります。");
    location.replace("../admin.html");
  } catch (error) {
    console.log("add error");
  }
});
