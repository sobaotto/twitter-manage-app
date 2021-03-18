"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const submitButton = document.getElementById("submit");

const editTargetSelect = document.getElementById("editTarget");

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
      editTargetSelect.appendChild(functionNameOption);

      functions.push(functionData);
    });
  });

// 更新ボタンを押した時の挙動
submitButton.addEventListener("click", () => {
  const selectedIndex = editTargetSelect.selectedIndex;
  const editingFunctionName = editTargetSelect.options[selectedIndex].value;

  let editingFunctionId = "";

  functions.forEach((functionData) => {
    if (functionData.functionName === editingFunctionName) {
      editingFunctionId = functionData.id;
    }
  });

  const form = document.getElementById("create-form");
  // 処理の有無を取得
  const switchRef = form.switch;
  const _switch = switchRef.value;

  // 処理の種類を取得
  const processingTypeRef = form.processingType;
  const processingType = processingTypeRef.value;

  const tweet = form.tweet.value;
  const startTime = form.startTime.value;
  const functionName = form.functionName.value;

  try {
    collection.doc(editingFunctionId).update({
      functionName: functionName,
      tweet: tweet,
      startTime: startTime,
      processingType: processingType,
      switch: _switch,
      updatedAt: new Date(),
    });
    form.tweet.value = "";
    form.startTime.value = "";
    form.tweet.focus();
  } catch (error) {
    console.log("add error");
  }
});
