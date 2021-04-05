"user strict";

const fetchProcessingNames = async (uid) => {
  return new Promise(async (resolve, reject) => {
    const db = firebase.firestore();

    const processingNames = [];

    const USER = "User";
    const PROCESSING = "Processing";

    await db
      .collection(USER)
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
    } else {
      reject("失敗");
    }
  });
};

export default fetchProcessingNames;
