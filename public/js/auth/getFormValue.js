"use script";

const getFormValue = () => {
  const form = document.getElementById("singup-form");
  // フォームの入力内容を取得
  const formValue = {
    password: form.password.value.trim(),
    confirmPassword: form.confirmPassword.value.trim(),
    username: form.username.value.trim(),
  };

  // フォームに空白があれば取得
  const blankValue = Object.values(formValue).find((value) => value === "");

  if (blankValue === "") {
    alert("未入力の項目があります。");
    return false;
  }
  if (formValue.password !== formValue.confirmPassword) {
    alert("パスワードが一致しません。もう一度お試しください。");
    return false;
  }

  return formValue;
};

export default getFormValue;
