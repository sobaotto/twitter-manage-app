const functions = require("firebase-functions");
const postFunction = require("./postFunction");

// exports.scheduledPost = functions
//   .region("asia-northeast1")
//   .pubsub.schedule("every 1 minutes")
//   .onRun((context) => {
//     postFunction();
//   });

exports.httpPost = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    postFunction();
  });
