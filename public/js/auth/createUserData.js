"use strict";

const db = firebase.firestore();

const createUserData = (userData) => {
  const uids = [];

  return db
    .collection("User")
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

      return new Promise((resolve, reject) => {
        if (!userRegistration) {
          db.collection("User")
            .doc(userData.uid)
            .set(userData)
            .catch((error) => console.error(error));
          resolve();
        } else {
          reject();
        }
      });
    });
};

export default createUserData;
