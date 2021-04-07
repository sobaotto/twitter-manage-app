const functions = require("firebase-functions");
const executionProcessings = require("./execution/executionProcessings");

// exports.executionProcessings = functions
//   .region("asia-northeast1")
//   .pubsub.schedule("every 1 minutes")
//   .onRun(() => {
//     executionProcessings();
//   });

exports.executionProcessings = functions
  .region("asia-northeast1")
  .pubsub.schedule("*/5 * * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => {
    executionProcessings();
  });

// exports.executionProcessings = functions
//   .region("asia-northeast1")
//   .pubsub.schedule("0,5,10,15,20,25,30,35,40,45,50,55 0-23 * * *")
//   .timeZone("Asia/Tokyo")
//   .onRun(() => {
//     executionProcessings();
//   });
