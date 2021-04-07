const admin = require("firebase-admin");
const { FIRESTORE_COLLECTION_ITEMS } = require("../const/firestore-collection");
const serviceAccount = require("../keys/serviceAccountKey.json");

const fetchProcessingsData = async (uid) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const sfRef = db.collection(FIRESTORE_COLLECTION_ITEMS.USER).doc(uid);
  const collections = await sfRef.listCollections();
  const processings = [];

  for (const collection of collections) {
    const snapshot = await collection.get();

    snapshot.forEach((doc) => {
      processings.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  }
  return processings;
};

module.exports = fetchProcessingsData;
