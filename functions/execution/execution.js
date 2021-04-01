// 処理の種類を分岐させる関数

// const reply = require("./reply");
const post = require("./post/post");
const getJapanTime = require("../otherFunctions/getJapanTime");
const favorite = require("./favorite/favorite");

const execution = async (twitterApiKey, processing) => {
  const japanTime = getJapanTime();

  // 処理情報取得
  const startTime = processing["startTime"];
  const processingType = processing["processingType"];
  const onOff = processing["switch"];
  // 投稿処理
  const postContent = processing["tweet"];
  // いいね処理
  const searchWord = processing["searchWord"];
  const favoriteCount = processing["favoriteCount"];

  if (onOff === "OFF" || startTime !== japanTime) {
    return;
  }

  console.log(processing);

  switch (processingType) {
    case "post":
      await post(twitterApiKey, postContent);
    case "favorite":
      await favorite(twitterApiKey, searchWord, favoriteCount);
    // case "reply":
    //   await reply(twitterApiKey, postContent);
  }
};

module.exports = execution;
