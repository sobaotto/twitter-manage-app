// 処理実行の大元のファイル

const fetchUsersData = require("../fetchData/fetchUsersData");
const authKeys = require("../keys/authKeys.json");
const execution = require("./execution");

const executionProcessings = async () => {
  const usersData = await fetchUsersData();

  for (const userData of usersData) {
    const accessTokenKey = userData["userInfo"]["accessTokenKey"];
    const accessTokenSecret = userData["userInfo"]["accessTokenSecret"];
    const screenName = userData["userInfo"]["screenName"];
    const uid = userData["userInfo"]["uid"];

    console.log("screen_name : ", screenName);

    const twitterApiKey = {
      ...authKeys,
      access_token_key: accessTokenKey,
      access_token_secret: accessTokenSecret,
    };

    const processings = userData["processings"];

    for (const processing of processings) {
      await execution(twitterApiKey, processing, uid)
        .then(() => {})
        .catch((e) => {
          console.error(e);
        });
    }
  }
};

// (async () => {
//   await executionProcessings();
// })();

module.exports = executionProcessings;