const Twitter = require("twitter");

const reply = (twitterApiKey, searchWord, postContent) => {
  return new Promise(async (resolve, reject) => {
    const client = new Twitter(twitterApiKey);

    const params = {
      q: searchWord,
      count: 1,
    };

    await client
      .get("search/tweets", params)
      .then(async (tweets) => {
        if (tweets.statuses[0].retweeted_status !== undefined) {
          return;
        } else {
          const screenName = tweets.statuses[0].user.screen_name;
          const tweetId = tweets.statuses[0].id_str;

          const replyMessage = "@" + screenName + "\n" + postContent;

          await client
            .post("statuses/update", {
              status: replyMessage,
              in_reply_to_status_id: tweetId,
              count: 1,
            })
            .then((reply) => {
              resolve(reply);
            })
            .catch((error) => {
              reject(error);
            });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = reply;
