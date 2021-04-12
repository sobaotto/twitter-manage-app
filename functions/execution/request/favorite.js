const Twitter = require("twitter");

const favorite = (twitterApiKey, searchWord) => {
  return new Promise(async (resolve, reject) => {
    const client = new Twitter(twitterApiKey);

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
              reject(error);
            });
        } else {
          reject("id_strがundefined");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = favorite;
