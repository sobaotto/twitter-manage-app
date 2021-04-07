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
      searchWord: form.searchWord.value.trim(),
    },
    favorite: {
      maxCount: form.maxCount.value.trim(),
      searchWord: form.searchWord.value.trim(),
    },
    post: {
      tweet: form.tweet.value.trim(),
    },
  };

  const selectedProcessingKeyValue = Object.entries(uniqueValues).find(
    (uniqueFormKeyValue) => uniqueFormKeyValue[0] === selectedProcessing
  );

  const selectedProcessingValue = selectedProcessingKeyValue[1];

  const formValue = {
    ...commonValue,
    ...selectedProcessingValue,
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
