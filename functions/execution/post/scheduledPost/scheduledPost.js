const post = require("../execution/post");
const executionCheck = require("./executionCheck");

const scheduledPost = async (req) => {
  const executionCheckedProcessingsData = await executionCheck(req);

  const result = {
    success: [],
    fail: [],
    error: [],
  };

  Promise.all(
    executionCheckedProcessingsData.map(async (data) => {
      if (!data.execution) {
        result.fail.push(data.processingName);
      } else {
        await post(data.tweet)
          .then(() => {
            result.success.push(data.processingName);
          })
          .catch((error) => {
            result.error.push(data.processingName, error[0].message);
          });
      }
    })
  );

  return result;
};

module.exports = scheduledPost;
