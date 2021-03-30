// 処理の種類を分岐させる関数

// const favorite = require("./favorite");
// const reply = require("./reply");
const post = require("./post/post");
const getJapanTime = require("../otherFunctions/getJapanTime");

const execution = async (twitterApiKey, processing) => {
  const japanTime = getJapanTime();

  const startTime = processing["startTime"];
  const processingType = processing["processingType"];
  const onOff = processing["switch"];
  const postContent = processing["tweet"];

  if (onOff === "OFF" || startTime !== japanTime) {
    return;
  }

  console.log(processing);

  switch (processingType) {
    case "post":
      await post(twitterApiKey, postContent)
        .then(() => {})
        .catch((e) => {
          console.error(e);
        });
    // case "favorite":
    //   await favorite();
    // case "reply":
    //   await reply(twitterApiKey, postContent);
  }
};

module.exports = execution;
