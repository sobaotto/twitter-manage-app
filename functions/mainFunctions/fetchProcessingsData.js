const fetchProcessingsData = async () => {
  // 【質問】外部モジュールのimportは、自作関数の中に書くか、外に書くか？（2021/03/23）
  const admin = require("firebase-admin");
  const serviceAccount = require("../keys/serviceAccountKey.json");

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const processingsData = [];

  await db
    .collection("processing")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        processingsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    })
    .catch((error) => {
      result.error.push(error);
      console.log(error);
    });
  return processingsData;
};

module.exports = fetchProcessingsData;
