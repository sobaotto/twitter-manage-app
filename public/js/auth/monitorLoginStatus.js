"user strict";

const monitorLoginStatus = () =>
  new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(`userId:${user.uid}`);
        resolve({ loginStatus: true, uid: user.uid });
      } else {
        alert(
          "ログイン状態が確認できません。\n再度ログインまたは、新規登録してください。"
        );
        location.replace("../../index.html");
      }
    });
  });

export default monitorLoginStatus;
