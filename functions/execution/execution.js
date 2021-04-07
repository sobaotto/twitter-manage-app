// 処理の種類を分岐させる関数

const admin = require("firebase-admin");
const reply = require("./request/reply");
const replyPython = require("./request/replyPython");
const post = require("./request/post");
const favorite = require("./request/favorite");
const getJapanTime = require("../otherFunctions/getJapanTime");
const { FIRESTORE_COLLECTION_ITEMS } = require("../const/firestore-collection");

const execution = async (twitterApiKey, processing, uid) => {
  const japanTime = getJapanTime();

  // 処理情報取得
  const startTime = processing["startTime"];
  const processingType = processing["processingType"];
  const onOffSwitch = processing["switch"];
  const maxCount = processing["maxCount"];
  const id = processing["id"];
  // 投稿処理
  const postContent = processing["tweet"];
  // いいね処理
  const searchWord = processing["searchWord"];
  let executionCounter = processing["executionCounter"];

  const db = admin.firestore();

  const processingRef = db
    .collection(FIRESTORE_COLLECTION_ITEMS.USER)
    .doc(uid)
    .collection(FIRESTORE_COLLECTION_ITEMS.PROCESSING)
    .doc(id);

  if (onOffSwitch === "OFF") {
    return;
  }

  switch (processingType) {
    case "post":
      if (startTime === japanTime) {
        post(twitterApiKey, postContent);
      }
      break;

    case "favorite":
      if (startTime === japanTime) {
        executionCounter = 0;
      }
      if (maxCount > executionCounter) {
        favorite(twitterApiKey, searchWord, executionCounter)
          .then(async () => {
            executionCounter++;

            console.log("fav分岐の中", executionCounter);

            await processingRef.update({
              executionCounter: executionCounter,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      break;

    case "reply":
      if (startTime === japanTime) {
        executionCounter = 0;
      }
      if (maxCount > executionCounter) {
        // await replyPython(twitterApiKey, searchWord, postContent);
        reply(twitterApiKey, searchWord, postContent)
          .then(async (res) => {
            executionCounter++;

            console.log("リプライ分岐の中", executionCounter);

            await processingRef.update({
              executionCounter: executionCounter,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      break;
  }
};

module.exports = execution;
