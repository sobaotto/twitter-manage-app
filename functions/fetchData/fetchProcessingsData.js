const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");

const fetchProcessingsData = async (uid) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const sfRef = db.collection("User").doc(uid);
  const collections = await sfRef.listCollections();
  const processings = [];

  return new Promise((resolve) => {
    collections.forEach(async (collection) => {
      const snapshot = await collection.get();

      snapshot.forEach((doc) => {
        processings.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      resolve(processings);
    });
  });
};

module.exports = fetchProcessingsData;
