// 処理の種類を分岐させる関数

// const favorite = require("./favorite");
// const scheduledPost = require("./post/scheduledPost");
const post = require("./post/post");
// const reply = require("./reply");
const getJapanTime = require("../otherFunctions/getJapanTime");

const execution = async (twitterApiKey, processing) => {
  const japanTime = getJapanTime();

  const startTime = processing["startTime"];
  const processingType = processing["processingType"];
  const onOff = processing["switch"];
  const postContent = processing["tweet"];

  //   if (onOff === "OFF" || startTime !== japanTime) {
  //     return;
  //   }

  console.log(twitterApiKey);
  console.log(processing);
  console.log("\n\n\n\n\n\n\n");

  switch (processingType) {
    case "post":
      await post(twitterApiKey, postContent)
        .then((result) => {
          console.log(result);
        })
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
