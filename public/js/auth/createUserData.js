"use strict";

const db = firebase.firestore();

const createUserData = (userData) => {
  const uids = [];

  db.collection("User")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        uids.push(doc.data().uid);
      });
    })

    .catch((error) => {
      console.error("Error getting documents: ", error);
    })
    .then(() => {
      const userRegistration = uids.includes(userData.uid);

      if (!userRegistration) {
        console.log("新規ユーザー。作る！");
        console.log(userData);
        db.collection("User")
          .doc(userData.uid)
          .set(userData)
          .catch((error) => console.error(error));
      } else {
        console.log("既にユーザーある");
      }
    });
};

export default createUserData;
