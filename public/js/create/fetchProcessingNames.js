"user strict";

import { FIRESTORE_COLLECTION_ITEMS } from "../../const/firestore-collection.js";

const fetchProcessingNames = async (uid) => {
  return new Promise(async (resolve, reject) => {
    const db = firebase.firestore();

    const processingNames = [];

    await db
      .collection(FIRESTORE_COLLECTION_ITEMS.USER)
      .doc(uid)
      .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
      .get()
      .then((processingDatas) => {
        processingDatas.forEach((doc) => {
          processingNames.push(doc.data().processingName);
        });
      });

    if (processingNames) {
      resolve(processingNames);
    } else {
      reject("失敗");
    }
  });
};

export default fetchProcessingNames;
