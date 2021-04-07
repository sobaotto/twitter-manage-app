const admin = require("firebase-admin");
const { FIRESTORE_COLLECTION_ITEMS } = require("../const/firestore-collection");
const serviceAccount = require("../keys/serviceAccountKey.json");
const fetchProcessingsData = require("./fetchProcessingsData");

const fetchUsersData = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const usersData = [];

  return db
    .collection(FIRESTORE_COLLECTION_ITEMS.USER)
    .get()
    .then(async (querySnapshot) => {
      for (const doc of querySnapshot.docs) {
        const processings = await fetchProcessingsData(doc.id);
        usersData.push({
          userInfo: doc.data(),
          processings: processings,
        });
      }
      return usersData;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = fetchUsersData;
