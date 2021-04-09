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
        if (tweets.statuses[0].id_str) {
          await client
            .post("favorites/create", {
              id: tweets.statuses[0].id_str,
              count: 1,
            })
            .then((tweet) => {
              resolve(tweet);
            })
            .catch((error) => {
              console.log("ふぁぼ実行のエラー");
              reject(error);
            });
        } else {
          reject("id_strがundefined");
        }
      })
      .catch((error) => {
        console.log("ツイート検索のエラー");
        reject(error);
      });
  });
};

module.exports = favorite;

// const client = new Twitter({
//   consumer_key: "PjuOGx65mSwW0Xe5kwovuPNDU",
//   consumer_secret: "bQzpBD2HW83eAQ8pLGcYkqrVtc2Kix3WeW7Mmz96QA5QZwh1tB",
//   access_token_key: "1301289140810469376-14BgNUFBGpPakYkvSTotNAVQIUDY4l",
//   access_token_secret: "k9pzhssJm3Bv6HZ2N2QRKOwafvROxxtsLc6fuvyt8xnlm",
// });
