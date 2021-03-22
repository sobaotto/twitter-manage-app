const postFunction = async () => {
  const tweet = require("./tweet");
  const admin = require("firebase-admin");
  const serviceAccount = require("./serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const db = admin.firestore();

  const processingData = [];

  const querySnapshot = await db.collection("processing").get();
  try {
    querySnapshot.forEach((doc) => {
      processingData.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.log(error);
  }

  processingData.forEach((data) => {
    if (data.switch === "ON") {
      // tweet();の自作モジュールでツイートできる。
      console.log(data.tweet);
    }
  });
};

module.exports = postFunction;
