"use strict";

import twitterOAuth from "../twitterOAuth.js";
import monitorLoginStatus from "../monitorLoginStatus.js";
import { USER } from "../../constant.js";

const twitterSignin = async () => {
  const signInButton = document.getElementById("signin");

  const db = firebase.firestore();

  const uids = [];

  await db
    .collection(USER)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        uids.push(doc.data().uid);
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  console.log(uids);

  signInButton.addEventListener("click", () => {
    twitterOAuth().then(() => {
      monitorLoginStatus()
        .then(({ loginStatus, uid }) => {
          const checkUserExists = uids.find((savedUid) => savedUid === uid);

          if (loginStatus && checkUserExists) {
            location.replace("../../admin.html");
          } else {
            alert(
              "会員登録がされていません。\n新規登録ボタンから登録をしてください。"
            );
          }
        })
        .catch(() => {});
    });
  });
};

export default twitterSignin;
