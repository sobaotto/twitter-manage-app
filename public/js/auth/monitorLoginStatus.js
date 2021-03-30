"user strict";

const monitorLoginStatus = () =>
  new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("userId:", user.uid);
        resolve({ loginStatus: true, uid: user.uid });
      } else {
        reject();
      }
    });
  });

export default monitorLoginStatus;
