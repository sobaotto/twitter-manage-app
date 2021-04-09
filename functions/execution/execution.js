// 処理の種類を分岐させる関数

const admin = require("firebase-admin");
const reply = require("./request/reply");
const post = require("./request/post");
const favorite = require("./request/favorite");
const { FIRESTORE_COLLECTION_ITEMS } = require("../const/firestore-collection");
const executionTimeJudge = require("../otherFunctions/executionTimeJudge");

const execution = async (twitterApiKey, processing, uid) => {
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

  const executionJudgeResult = executionTimeJudge(startTime);

  switch (processingType) {
    case "post":
      console.log("投稿分岐");

      if (executionJudgeResult) {
        console.log("投稿の中入った");

        post(twitterApiKey, postContent);
      }
      break;

    case "favorite":
      console.log("ファボ分岐");

      if (executionJudgeResult) {
        executionCounter = 0;
      }
      if (maxCount > executionCounter) {
        console.log("ファヴォの中入った");
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
      if (executionJudgeResult) {
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
