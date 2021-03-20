"use script";

import getEditingFunctionId from "./getEditingFunctionId.js";
import getFormValue from "./getFormValue.js";

const updateFunction = () => {
  const submitButton = document.getElementById("submit");
  console.log(submitButton);

  // 更新ボタンを押した時の挙動
  submitButton.addEventListener("click", async (EditingFunctionId) => {
    const formId = "edit-form";
    const formValue = getFormValue(formId);

    console.log(formValue);

    try {
      await collection.doc(EditingFunctionId).update({
        ...formValue,
        updatedAt: new Date(),
      });

      alert("編集作業が完了しました。\n管理画面に戻ります。");
      location.replace("../admin.html");
    } catch (error) {
      console.log("add error");
    }
  });
};

export default updateFunction;
