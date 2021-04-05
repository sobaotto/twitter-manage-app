const functions = require("firebase-functions");
const scheduledPost = require("./scheduledPost/scheduledPost");

exports.scheduledPost = functions
  .region("asia-northeast1")
  .pubsub.schedule("every 1 minutes")
  .onRun(async () => {
    const result = await scheduledPost();
    return result;
  });

exports.scheduledPostTest = functions
  .region("asia-northeast1")
  .https.onRequest(async (req, res) => {
    const result = await scheduledPost(req);
    res.json(result);
  });
