const admin = require("firebase-admin");
const { FIRESTORE_COLLECTION_ITEMS } = require("../const/firestore-collection");
const serviceAccount = require("../keys/serviceAccountKey.json");

const fetchProcessingsData = async () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const processingsData = [];

  await db
    .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
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
