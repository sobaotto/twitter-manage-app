// 処理実行の大元のファイル

// const fetchUsersData = require("../fetchData/fetchUsersData");
// const execution = require("./execution");
const getUsersData = require("../fetchData/usersData");
const authKeys = require("../keys/authKeys.json");

const executionProcessings = () => {
  const usersData = getUsersData();

  usersData.forEach((userData) => {
    const accessTokenKey = userData["userInfo"]["accessTokenKey"];
    const accessTokenSecret = userData["userInfo"]["accessTokenSecret"];
    const uid = userData["userInfo"]["uid"];

    const twitterApiKey = {
      ...authKeys,
      accessTokenKey,
      accessTokenSecret,
    };

    processings = userData["processings"];
  });

  processings.forEach((processing) => {
    startTime = processing["startTime"];
    processingType = processing["processingType"];
    onOff = processing["switch"];
    tweet = processing["tweet"];
    console.log(tweet);
  });
};

// executionProcessings();

module.exports = executionProcessings;
