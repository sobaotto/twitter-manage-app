const postFunction = async () => {
  const tweet = require("./tweet");
  const admin = require("firebase-admin");
  const serviceAccount = require("./serviceAccountKey.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const db = admin.firestore();

  const functionData = [];

  const querySnapshot = await db.collection("functions").get();
  try {
    querySnapshot.forEach((doc) => {
      functionData.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  } catch (error) {
    console.log(error);
  }

  functionData.forEach((data) => {
    if (data.switch === "ON") {
      // tweet();の自作モジュールでツイートできる。
      console.log(data.tweet);
    }
  });
};

module.exports = postFunction;
