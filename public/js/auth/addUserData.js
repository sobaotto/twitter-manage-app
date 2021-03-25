"use strict";

const db = firebase.firestore();

const addUserData = (formData, userData) => {
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
      let check = true;

      uids.forEach((uid) => {
        if (uid === userData.uid) {
          check = false;
        }
      });

      if (check) {
        db.collection("User")
          .doc(userData.uid)
          .set({
            ...userData,
            password: formData.password,
            username: formData.username,
          });
      }
    });
};

export default addUserData;
