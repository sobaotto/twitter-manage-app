"use strict";

import { USER } from "../constant";

const db = firebase.firestore();

const createUserData = (userData) => {
  const uids = [];

  return db
    .collection(USER)
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
          db.collection(USER)
            .doc(userData.uid)
            .set(userData)
            .catch((error) => console.error(error))
            .then(() => {
              resolve();
            });
        } else {
          reject();
        }
      });
    });
};

export default createUserData;
