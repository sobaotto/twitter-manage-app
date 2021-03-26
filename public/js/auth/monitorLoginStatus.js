"user strict";

const monitorLoginStatus = async () => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(`userId:${user.uid}`);
      return true;
    } else {
      alert(
        "ログイン状態が確認できません。\n再度ログインまたは、新規登録してください。"
      );
      location.replace("../../index.html");
    }
  });
};

export default monitorLoginStatus;
