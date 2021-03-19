"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", async () => {
  const form = document.getElementById("create-form");
  // フォームの入力内容を取得する。
  const _switch = form.switch.value;
  const processingType = form.processingType.value;
  const tweet = form.tweet.value;
  const startTime = form.startTime.value;
  const functionName = form.functionName.value;

  try {
    await collection.add({
      functionName: functionName,
      tweet: tweet,
      startTime: startTime,
      processingType: processingType,
      switch: _switch,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    alert("追加作業が完了しました。\n管理画面に戻ります。");
    location.replace("../admin.html");
  } catch (error) {
    console.log("add error");
  }
});
