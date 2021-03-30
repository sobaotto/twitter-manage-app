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
      access_token_key: "1301289140810469376-MUS41b8F8an6LMTAAQcn641yeOZRNK",
      access_token_secret: "sFcNwj0KWsDPvQ2xqssHhwcAJNTiPQDHjLV2wNulQXJns",
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
