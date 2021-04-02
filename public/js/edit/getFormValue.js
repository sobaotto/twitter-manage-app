"use script";

const getFormValue = (formId, selectedProcessing) => {
  const form = document.getElementById(`${formId}`);

  // フォームの共通部分
  const commonValue = {
    processingName: form.processingName.value.trim(),
    startTime: form.startTime.value.trim(),
    processingType: form.processingType.value.trim(),
    switch: form.switch.value.trim(),
  };

  // 処理によって異なる項目
  const uniqueValues = {
    reply: {
      tweet: form.tweet.value.trim(),
      maxCount: form.maxCount.value.trim(),
      targetWord: form.targetWord.value.trim(),
    },
    favorite: {
      maxCount: form.maxCount.value.trim(),
      targetWord: form.targetWord.value.trim(),
    },
    post: {
      tweet: form.tweet.value.trim(),
    },
  };

  const selectedProcessingValue = Object.entries(uniqueValues).find(
    (uniqueformValue) => uniqueformValue[0] === selectedProcessing
  );

  const formValue = {
    ...commonValue,
    ...selectedProcessingValue[1],
  };
  console.log("formValue", formValue);

  // フォームに空白があれば取得
  const blankValue = Object.values(formValue).find((value) => value === "");

  if (blankValue === "") {
    alert("空の項目があると更新できません。");
  } else {
    return formValue;
  }
};

export default getFormValue;
