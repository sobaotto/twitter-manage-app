"user strict";

const fetchProcessingNames = (uid) => {
  return new Promise((resolve) => {
    const db = firebase.firestore();

    const processingNames = [];

    const USER = "User";
    const PROCESSING = "Processing";

    db.collection(USER)
      .doc(uid)
      .collection(PROCESSING)
      .get()
      .then((processingDatas) => {
        processingDatas.forEach((doc) => {
          processingNames.push(doc.data().processingName);
        });
      });
    if (processingNames) {
      resolve(processingNames);
    }
  });
};

export default fetchProcessingNames;
