const Twitter = require("twitter");

const favorite = (twitterApiKey, searchWord, executionCounter) => {
  return new Promise(async (resolve, reject) => {
    const client = new Twitter(twitterApiKey);

    console.log("favorite関数の中", executionCounter);

    const params = {
      q: searchWord,
      count: 1,
    };

    await client
      .get("search/tweets", params)
      .then(async (tweets) => {
        await client
          .post("favorites/create", { id: tweets.statuses[0].id_str, count: 1 })
          .then((tweet) => {
            resolve(tweet);
          })
          .catch((error) => {
            console.log("ふぁぼ実行のエラー");
            reject(error);
          });
      })
      .catch((error) => {
        console.log("ツイート検索のエラー");
        reject(error);
      });
  });
};

module.exports = favorite;
