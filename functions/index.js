const functions = require("firebase-functions");
const post = require("./postFunction");

exports.scheduledPost = functions
  .region("asia-northeast1")
  .pubsub.schedule("every 1 minutes")
  .onRun((context) => {
    post();
  });

exports.httpPost = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    post();
  });
