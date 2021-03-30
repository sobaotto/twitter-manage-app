const functions = require("firebase-functions");
const executionProcessings = require("./execution/executionProcessings");

exports.executionProcessings = functions
  .region("asia-northeast1")
  .pubsub.schedule("every 1 minutes")
  .onRun(() => {
    executionProcessings();
  });
