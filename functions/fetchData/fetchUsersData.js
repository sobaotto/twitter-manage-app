const admin = require("firebase-admin");
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

  const USER = "User";

  return db
    .collection(USER)
    .get()
    .then((querySnapshot) => {
      return new Promise(async (resolve) => {
        querySnapshot.forEach(async (doc) => {
          const processings = await fetchProcessingsData(doc.id);
          usersData.push({
            userInfo: doc.data(),
            processings: processings,
          });
          resolve(usersData);
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = fetchUsersData;
