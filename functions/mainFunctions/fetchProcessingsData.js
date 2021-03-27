const admin = require("firebase-admin");
const serviceAccount = require("../keys/serviceAccountKey.json");

const fetchProcessingsData = async () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  const processingsData = [];

  return db
    .collection("Processing")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        processingsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return processingsData;
    })
    .catch((error) => {
      result.error.push(error);
      console.log(error);
    });
};

module.exports = fetchProcessingsData;
