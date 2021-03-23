const scheduledPost = async (req) => {
  // 【質問】外部モジュールのimportは、自作関数の中に書くか、外に書くか？（2021/03/23）
  const tweet = require("../mainFunctions/tweet");
  const executionCheck = require("./executionCheck");

  const executionCheckedProcessingsData = await executionCheck(req);

  const result = {
    success: [],
    fail: [],
    error: [],
  };

  await executionCheckedProcessingsData.forEach(async (data) => {
    if (data.execution) {
      await tweet(data.tweet)
        .then(() => {
          result.success.push(data.processingName);
        })
        .catch((error) => {
          result.error.push(`${data.processingName}：${error}`);
        });
    } else {
      result.fail.push(data.processingName);
    }
  });

  return result;
};

module.exports = scheduledPost;
