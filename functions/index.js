const functions = require("firebase-functions");
const executionProcessings = require("./execution/executionProcessings");

exports.executionProcessings = functions
  .region("asia-northeast1")
  .pubsub.schedule("every 1 minutes")
  .onRun(async () => {
    const executionLog = await executionProcessings();
    return executionLog;
  });

// exports.scheduledPost = functions
//   .region("asia-northeast1")
//   .pubsub.schedule("every 1 minutes")
//   .onRun(async () => {
//     const result = await scheduledPost();
//     return result;
//   });

// exports.scheduledPostTest = functions
//   .region("asia-northeast1")
//   .https.onRequest(async (req, res) => {
//     const result = await scheduledPost(req);
//     res.json(result);
//   });
