// 処理実行の大元のファイル

const fetchUsersData = require("../fetchData/fetchUsersData");
const authKeys = require("../keys/authKeys.json");
const execution = require("./execution");

const executionProcessings = async () => {
  const usersData = await fetchUsersData();

  for (const userData of usersData) {
    const accessTokenKey = userData["userInfo"]["accessTokenKey"];
    const accessTokenSecret = userData["userInfo"]["accessTokenSecret"];

    const twitterApiKey = {
      ...authKeys,
      access_token_key: accessTokenKey,
      access_token_secret: accessTokenSecret,
    };

    const processings = userData["processings"];

    for (const processing of processings) {
      await execution(twitterApiKey, processing);
    }
  }
};

(async () => {
  await executionProcessings();
})();

// module.exports = executionProcessings;
