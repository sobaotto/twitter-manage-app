const functions = require("firebase-functions");
const executionProcessings = require("./execution/executionProcessings");

exports.executionProcessings = functions
  .region("asia-northeast1")
  .pubsub.schedule("*/5 * * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => {
    executionProcessings()
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  });
