"use script";

const db = firebase.firestore();

const collection = db.collection("functions");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
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
    collection.add({
      functionName: functionName,
      tweet: tweet,
      startTime: startTime,
      processingType: processingType,
      switch: _switch,
      createdAt: new Date(),
    });

    form.tweet.value = "";
    form.startTime.value = "";
    form.tweet.focus();
  } catch (error) {
    console.log("add error");
  }
});
