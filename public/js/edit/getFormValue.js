"use script";

const getFormValue = (formId, formType) => {
  const form = document.getElementById(`${formId}`);

  // フォームの共通部分
  const commonValue = {
    processingName: form.processingName.value.trim(),
    startTime: form.startTime.value.trim(),
    processingType: form.processingType.value.trim(),
    switch: form.switch.value.trim(),
  };

  // 処理によって異なる項目
  const reply = {
    tweet: form.tweet.value.trim(),
    maxCount: form.maxCount.value.trim(),
    targetWord: form.targetWord.value.trim(),
  };
  const favorite = {
    maxCount: form.maxCount.value.trim(),
    targetWord: form.targetWord.value.trim(),
  };
  const post = {
    tweet: form.tweet.value.trim(),
  };

  let formValue = {};

  console.log(formType);

  switch (formType) {
    case "post":
      formValue = {
        ...commonValue,
        ...post,
      };
      console.log("post;", formValue);

      break;
    case "favorite":
      formValue = {
        ...commonValue,
        ...favorite,
      };
      console.log("favorite", formValue);
      break;
    case "reply":
      formValue = {
        ...commonValue,
        ...reply,
      };
      console.log("reply", formValue);
      break;
  }

  console.log("外；", formValue);
  // フォームに空白があれば取得
  const blankValue = Object.values(formValue).find((value) => value === "");

  if (blankValue === "") {
    alert("空の項目があると更新できません。");
  } else {
    return formValue;
  }
};

export default getFormValue;
