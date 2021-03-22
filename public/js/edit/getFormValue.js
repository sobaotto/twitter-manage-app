"use script";

const getFormValue = (formId) => {
  const form = document.getElementById(`${formId}`);
  // フォームの入力内容を取得
  const formValue = {
    functionName: form.functionName.value.trim(),
    tweet: form.tweet.value.trim(),
    startTime: form.startTime.value.trim(),
    processingType: form.processingType.value.trim(),
    switch: form.switch.value.trim(),
  };

  // フォームに空白があれば取得
  const blankValue = Object.values(formValue).find((value) => value === "");

  if (blankValue === "") {
    alert("空の項目があると追加できません。");
    return false;
  } else {
    return formValue;
  }
};

export default getFormValue;
